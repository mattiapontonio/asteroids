customElements.define(
    'apod-wc',
    class extends HTMLElement {
        connectedCallback() {
            fetch(`https://api.nasa.gov/planetary/apod${location.search}`).then(
                (response) => {
                    switch (response.status) {
                        case 200:
                            response
                                .json()
                                .then(
                                    (data) => {
                                        if (Array.isArray(data)) {
                                            const ul = document.createElement("ul");
                                            data.forEach(function(e) {
                                                const li = document.createElement("li");
                                                li.innerText = e.title;
                                            })
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
                                            if (media_type == 'video') {
                                                this.append(document.createElement("div").innerHTML = `
                        <section>
                        <h1>Astronomy Picture of the Day</h1>
                            <iframe width="100%" height="auto" src="${url}"></iframe>
                            <h2>${title}</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>media_type</th>
                                        <td>${media_type}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>${explanation}</p>
                        </section>`);
                                            } else {
                                                this.append(document.createElement("div").innerHTML = `
                        <section>
                        <h1>Astronomy Picture of the Day</h1>
                        <table>
                        <caption>Response</caption>
                            <tbody>
                                <tr>
                                <th>media_type</th>
                                    <td>${media_type}</td>
                                </tr>
                                <tr>
                                <th>resource</th>
                                    <td>${resource}</td>
                                </tr>
                                <tr>
                                <th>concept_tags</th>
                                    <td>${concept_tags}</td>
                                </tr>
                                <tr>
                                    <th>title</th>
                                    <td>${title}</td>
                                </tr>
                                <tr>
                                <th>date</th>
                                    <td>${date}</td>
                                </tr>
                                <tr>
                                <th>url</th>
                                    <td>${url}</td>
                                </tr>
                                <tr>
                                <th>hdurl</th>
                                    <td>${hdurl}</td>
                                </tr>
                                <tr>
                                <tr>
                                <th>explanation</th>
                                    <td>${explanation}</td>
                                </tr>
                                <tr>
                                <th>concepts</th>
                                    <td>${concepts}</td>
                                </tr>
                                <tr>
                                <th>thumbnail_url</th>
                                    <td>${thumbnail_url}</td>
                                </tr>
                                <tr>
                                <th>copyright</th>
                                    <td>${copyright}</td>
                                </tr>
                                <tr>
                                <th>service_version</th>
                                    <td>${service_version}</td>
                                </tr>
                            </tbody>
                        </table>
                        <picture>
                            <source
                                media="(min-width:1680px)"
                                srcset="${hdurl}"
                            >
                            <source
                                media="(min-width:465px)"
                                srcset="${url}"
                            >
                            <img
                                loading="lazy"
                                src="${url}"
                                alt="${title}"
                                title="${title}"
                            >
                            <figcaption>
                                <h2>${title}</h2>
                                <p>${explanation}</p>
                            </figcaption>
                        </picture>
                        </section>`)
                                            }
                                        }
                                    }
                                );
                            break
                        case 400:
                        case 403:
                        case 429:
                            this.innerText = response.statusText
                            this.classList.add("error");
                            break
                        default:
                            break
                    }
                }
            )
        }
    }
)