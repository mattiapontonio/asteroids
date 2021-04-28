customElements.define(
    'apod-wc',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        connectedCallback() {
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.api_key}`).then(
                (response) => {
                    if (response.status == 200) {
                        response
                            .json()
                            .then(({ title, hdurl, url, explanation, media_type }) => {
                                if (media_type == "video") {
                                    this.innerHTML = `
                    <section>
                        <h2>${title}</h2>
                        <iframe width="100%" height="auto" src="${url}"></iframe>
                        <p>${explanation}</p>
                    </section>`
                                } else {
                                    this.innerHTML = `
                    <section>
                    <h2>${title}</h2>
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
                        <figcaption>${explanation}</figcaption>
                    </picture>
                    </section>`
                                }
                            })
                    }
                }
            )
        }
    }
)