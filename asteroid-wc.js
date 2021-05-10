customElements.define(
    "asteroid-wc",
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get("api_key");
        }
        get id() {
            return new URLSearchParams(location.search).get("id");
        }
        connectedCallback() {
            const form = document.createElement("form");
            form.append(
                Object.assign(document.createElement("label"), {
                    htmlFor: "id",
                    innerText: "id",
                }),
                Object.assign(document.createElement("input"), {
                    id: "id",
                    type: "text",
                    value: this.id,
                    required: true,
                }),
                Object.assign(document.createElement("label"), {
                    htmlFor: "api_key",
                    innerText: "api_key",
                }),
                Object.assign(document.createElement("input"), {
                    id: "api_key",
                    type: "text",
                    value: this.api_key,
                    required: true,
                }),
                Object.assign(document.createElement("button"), {
                    type: "submit",
                    innerText: "submit",
                })
            );
            this.append(form);
            fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/${this.id}?api_key=${this.api_key}`
            ).then((response) => {
                if (response.status == 200) {
                    response.json().then((data) => {
                        const {
                            absolute_magnitude_h,
                            close_approach_data,
                            designation,
                            estimated_diameter,
                            id,
                            is_potentially_hazardous_asteroid,
                            is_sentry_object,
                            links,
                            name,
                            nasa_jpl_url,
                            neo_reference_id,
                            orbital_data,
                        } = data;
                        let h2 = document.createElement("h2");
                        h2.innerText = name
                        this.append(h2)
                        let table = document.createElement("table");
                        let row;
                        let cell;
                        row = table.insertRow();
                        row.insertCell().innerText = "Links";
                        cell = row.insertCell();
                        cell.innerText = links.self;

                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "ID";
                        cell = row.insertCell();
                        cell.innerText = id;

                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "Name";
                        cell = row.insertCell();
                        cell.innerText = name;

                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "Designation";
                        cell = row.insertCell();
                        cell.innerText = designation;

                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "JPL";
                        cell = row.insertCell();
                        cell.innerText = nasa_jpl_url;

                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "Magnitude";
                        cell = row.insertCell();
                        cell.innerText = absolute_magnitude_h;
                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "Diameter";
                        cell = row.insertCell();
                        cell.innerText =
                            estimated_diameter.kilometers.estimated_diameter_min +
                            " Km — " +
                            estimated_diameter.kilometers.estimated_diameter_max +
                            " Km";
                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "Hazardous";
                        cell = row.insertCell();
                        cell.innerText = is_potentially_hazardous_asteroid;
                        row = table.insertRow();
                        cell = row.insertCell();
                        cell.innerText = "Sentry";
                        cell = row.insertCell();
                        cell.innerText = is_sentry_object;
                        console.log(close_approach_data);
                        this.append(table);
                        table = document.createElement("table");
                        table.createCaption().innerText = "Approach"
                        close_approach_data.forEach(function({ close_approach_date_full, miss_distance, relative_velocity }) {
                            row = table.insertRow();
                            cell = row.insertCell();
                            cell.innerText = close_approach_date_full;
                            cell = row.insertCell();
                            cell.innerText = miss_distance.kilometers;
                            cell = row.insertCell();
                            cell.innerText = relative_velocity.kilometers_per_hour;
                        })
                        this.append(table);
                    });
                } else {
                    this.append(document.createTextNode(response.status));
                }
            });
        }
    }
);