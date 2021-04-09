customElements.define('scatter-plot', class extends HTMLElement {
    connectedCallback() {
      fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.getAttribute("start_date")}&end_date=${this.getAttribute("end_date")}&api_key=${this.getAttribute("api_key")}`)
        .then(response => {
            if(response.ok) {
                response.json().then(body => {
                    const d = this.getAttribute("start_date");
                    const o = body.near_earth_objects[d]
                    .map(function(e, i, a) {
                        return {
                            ...e,
                            x: e.close_approach_data[0].relative_velocity.kilometers_per_second,
                            y: e.close_approach_data[0].miss_distance.kilometers
                        }
                    });
                    console.table(body)
                    this.innerHTML=`
                        <div>${body.element_count}</div>
                        <fieldset>
                        <legend>Date</legend>
                        ${Object.keys(body.near_earth_objects).map(e => `
                        <input 
                            type="radio" 
                            id=${e} 
                            name="date" 
                            value=${e}
                            >
                        <label for=${e}>${e}</label>`).join('')}
                        </fieldset>
                        <svg 
                            id="svg"
                            e='${JSON.stringify(body)}'
                            viewBox=${[
                                0,
                                0,
                                Math.max(...o.map(e => e.x)),
                                Math.max(...o.map(e => e.y))
                            ]} 
                            height="100" 
                            width="100%" 
                            stroke="red" 
                            fill="grey" 
                            preserveAspectRatio="xMidYMid meet" 
                            style="
                                display: block;
                                height: auto;">
                            ${o.map(e => `<circle 
                                stroke="black" 
                                stroke-width="2%" 
                                fill="red" 
                                cx=${e.x}
                                cy=${e.y}  
                                e='${JSON.stringify(e)}'
                                r="4%"/>`).join('')}        
                        </svg>
                    `;
                })
            } else {
                response.json().then(body => {
                    this.innerHTML=`
                        <div>${Object.values(body).map(e => `<div>${e}</div>`).join('')}</div>
                        <div>${Object.values(response).map(e => `<div>${e}</div>`).join('')}</div>
                    `
                })
            };
        })
        .catch(e=> this.innerHTML=e)
    }
  });