customElements.define(
    'apod-wc',
    class extends HTMLElement {
        connectedCallback() {
            const api_key = new URLSearchParams(location.search).get('api_key');
            this.innerText = "loading";
            fetch(`https://api.nasa.gov/planetary/apod${location.search}`).then(
                (response) => {
                    this.childNodes[0].remove();
                    switch (response.status) {
                        case 200:
                            response
                                .json()
                                .then(
                                    (data) => {
                                        if (Array.isArray(data)) {
                                            const section = document.createElement("section");
                                            const table = document.createElement("table");
                                            const thead = table.createTHead();
                                            const tbody = table.createTBody();
                                            const row = thead.insertRow();
                                            table.createCaption().innerText = "Items";
                                            row.insertCell().innerText = "index";
                                            row.insertCell().innerText = "image";
                                            row.insertCell().innerText = "date";
                                            row.insertCell().innerText = "copyright";
                                            row.insertCell().innerText = "media type";
                                            data.forEach(function(e, i) {
                                                const row = tbody.insertRow();
                                                const {
                                                    title,
                                                    date,
                                                    url,
                                                    copyright,
                                                    thumbnail_url,
                                                    media_type
                                                } = e;
                                                const img = document.createElement("img");
                                                const a = document.createElement("a");
                                                img.loading = "lazy";
                                                img.alt = title
                                                img.title = title
                                                img.width = 64;
                                                a.href = `?api_key=${api_key}&date=${date}`;
                                                a.innerText = title
                                                row.insertCell().innerText = i;
                                                row.insertCell().appendChild(a);
                                                row.insertCell().innerText = copyright;
                                                row.insertCell().innerText = media_type;
                                                switch (media_type) {
                                                    case "video":
                                                        img.src = "https://fonts.gstatic.com/s/i/materialicons/play_circle_filled/v12/24px.svg"
                                                        row.insertCell(1).appendChild(img);
                                                        break;
                                                    case "image":
                                                        img.src = url;
                                                        row.insertCell(1).appendChild(img);
                                                        break;

                                                    default:
                                                        break;
                                                }
                                            });
                                            section.append(table);
                                            this.append(section);
                                        } else {
                                            const {
                                                resource,
                                                concept_tags,
                                                title,
                                                date,
                                                url,
                                                hdurl,
                                                media_type,
                                                explanation,
                                                concepts,
                                                thumbnail_url,
                                                copyright,
                                                service_version,
                                            } = data;
                                            const section = document.createElement("section");
                                            const h2 = document.createElement("h2");
                                            const table = document.createElement("table");
                                            table.createCaption().innerText = title;
                                            switch (media_type) {
                                                case "video":
                                                    const iframe = document.createElement("iframe");
                                                    iframe.src = url;
                                                    Object.entries(data).forEach(function([a, b]) {
                                                        const row = table.insertRow();
                                                        row.insertCell().innerText = a;
                                                        row.insertCell().innerText = b;
                                                    });
                                                    section.append(h2, iframe, table)
                                                    break;
                                                case "image":
                                                    const picture = document.createElement("picture");
                                                    const figcaption = document.createElement("figcaption");
                                                    const img = document.createElement("img");
                                                    const a = document.createElement("a");
                                                    const sources = [
                                                        document.createElement("source"),
                                                        document.createElement("source")
                                                    ]
                                                    sources[0].media = "(min-width:1680px)";
                                                    sources[0].srcset = hdurl;
                                                    sources[1].media = "(min-width:1680px)";
                                                    sources[1].srcset = url;
                                                    img.loading = "lazy";
                                                    img.src = url;
                                                    img.alt = title
                                                    img.title = title;
                                                    h2.innerText = title;
                                                    a.href = `?api_key=${api_key}&date=${date}`;
                                                    a.innerText = "MORE"
                                                    figcaption.append(h2, a);
                                                    picture.append(
                                                        ...sources,
                                                        img,
                                                        figcaption
                                                    )
                                                    Object.entries(data).forEach(function([a, b]) {
                                                        const row = table.insertRow();
                                                        row.insertCell().innerText = a;
                                                        row.insertCell().innerText = b;
                                                    });
                                                    section.append(picture, table)
                                                    break;

                                                default:
                                                    break;
                                            }
                                            this.append(section);
                                        }
                                    }
                                );
                            break
                        case 400:
                        case 403:
                        case 429:
                        case 500:
                            this.innerText = response.statusText
                            this.classList.add("error");
                            break
                        default:
                            break
                    }
                }
            )
        }
    })