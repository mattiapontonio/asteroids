customElements.define(
    'asteroid-wc',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        get id() {
            return new URLSearchParams(location.search).get('id')
        }
        connectedCallback() {
            const form = document.createElement("form");
            form.append(
                Object.assign(document.createElement("label"), {
                    htmlFor: "id",
                    innerText: "id"
                }),
                Object.assign(document.createElement("input"), {
                    id: "id",
                    type: "text",
                    value: this.id,
                    required: true
                }),
                Object.assign(document.createElement("label"), {
                    htmlFor: "api_key",
                    innerText: "api_key"
                }),
                Object.assign(document.createElement("input"), {
                    id: "api_key",
                    type: "text",
                    value: this.api_key,
                    required: true
                }),
                Object.assign(document.createElement("button"), {
                    type: "submit",
                    innerText: "submit"
                }),
            );
            this.append(form);
            fetch(`http://www.neowsapp.com/rest/v1/neo/${this.id}?api_key=${this.api_key}`)
                .then((response) => {
                    if (response.status == 200) {
                        response.json().then((data) => {
                            const { estimated_diameter } = data;
                            const table = document.createElement("table");
                            Object.entries(data).forEach(function([a, b]) {
                                let row = table.insertRow();
                                let cell;
                                switch (a) {
                                    case "links":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.appendChild(Object.assign(document.createElement("a"), {
                                            href: b.self,
                                            innerText: "self"
                                        }));
                                        cell.colSpan = 4;
                                        break;
                                    case "id":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: b
                                        }));
                                        cell.colSpan = 4;
                                        break;
                                    case "neo_reference_id":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: b
                                        }));
                                        cell.colSpan = 4;
                                        break;
                                    case "name":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.innerText = b;
                                        cell.colSpan = 4;
                                        break;
                                    case "designation":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.innerText = b;
                                        cell.colSpan = 4;
                                        break;
                                    case "nasa_jpl_url":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.appendChild(Object.assign(document.createElement("a"), {
                                            href: b.self,
                                            innerText: b
                                        }));
                                        cell.colSpan = 4;
                                        break;
                                    case "absolute_magnitude_h":
                                        row.insertCell().innerText = a;
                                        cell = row.insertCell()
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: b
                                        }));
                                        cell.colSpan = 4;
                                        break;
                                    case "estimated_diameter":
                                        cell = row.insertCell();
                                        cell.innerText = a;
                                        cell.rowSpan = 4;
                                        cell = row.insertCell();
                                        cell.innerText = "feet";
                                        cell.rowSpan = 2;
                                        row.insertCell().innerText = "estimated_diameter_max";
                                        cell = row.insertCell();
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: estimated_diameter.feet.estimated_diameter_max
                                        }));
                                        row = table.insertRow();
                                        cell = row.insertCell();
                                        cell.innerText = "estimated_diameter_min";
                                        cell = row.insertCell();
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: estimated_diameter.feet.estimated_diameter_min
                                        }));
                                        row = table.insertRow();
                                        cell = row.insertCell();
                                        cell.innerText = "kilometers";
                                        cell.rowSpan = 2;
                                        row.insertCell().innerText = "estimated_diameter_max";
                                        cell = row.insertCell();
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: estimated_diameter.feet.estimated_diameter_max
                                        }));
                                        row = table.insertRow();
                                        cell = row.insertCell();
                                        cell.innerText = "estimated_diameter_min";
                                        cell = row.insertCell();
                                        cell.appendChild(Object.assign(document.createElement("pre"), {
                                            innerText: estimated_diameter.feet.estimated_diameter_min
                                        }));
                                        break;
                                    default:
                                        row.insertCell().innerText = JSON.stringify(a, undefined, 2);
                                        row.insertCell().innerText = JSON.stringify(b, undefined, 2);
                                        break;
                                }
                            });
                            this.append(table);
                        })
                    } else {
                        this.append(document.createTextNode(response.status));
                    }
                })
        }
    })