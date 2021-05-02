customElements.define(
    'apod-wc',
    class extends HTMLElement {
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.api_key}`).then(
                (response) => {
                    switch (response.status) {
                        case 200:
                            response
                                .json()
                                .then(({ title, hdurl, url, explanation, media_type }) => {
                                    if (media_type == 'video') {
                                        this.innerHTML = `
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
                    </section>`
                                    } else {
                                        this.innerHTML = `
                    <section>
                    <h1>Astronomy Picture of the Day</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>media_type</th>
                                <td>${media_type}</td>
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
                    </section>`
                                    }
                                })
                            break
                        case 403:
                            const a = document.createElement('a')
                            a.href = '/login.html'
                            a.innerText = 'Login'
                            this.append(a)
                        default:
                            break
                    }
                }
            )
        }
    }
)