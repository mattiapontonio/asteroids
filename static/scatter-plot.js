customElements.define('scatter-plot', class extends HTMLElement {
    connectedCallback() {
      fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.getAttribute("start_date")}&end_date=${this.getAttribute("end_date")}&api_key=${this.getAttribute("api_key")}`)
        .then(response => {
            if(response.ok) {
                response.json().then(body => {
                    const d = this.getAttribute("start_date");
                    const o = body.near_earth_objects[d];
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
                            viewBox=${[
                                0,
                                0,
                                100,
                                100
                            ]} 
                            height="100" 
                            width="100%" 
                            stroke="red" 
                            fill="grey" 
                            preserveAspectRatio="xMidYMid meet" 
                            style="
                                display: block;
                                height: auto;">
                            <g stroke="black" stroke-width="1">
                                ${Array.from({length:10}).map((e,i,a) => `<line x1=${i*10} y1="0" x2=${i*10} y2="100" />`).join('')}
                                ${Array.from({length:10}).map((e,i,a) => `<line x1="0" y1=${i*10} x2="100" y2=${i*10} />`).join('')}
                            </g>
                            ${o.map((e,i,a) => `<circle 
                                stroke="black" 
                                stroke-width="1" 
                                fill="red" 
                                cx=${(()=>{
                                    const g = a.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second);
                                    return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                                })()}
                                cy=${(()=>{
                                    const g = a.map(z=>z.close_approach_data[0].miss_distance.kilometers);
                                    return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                                })()}
                                r="4%"/>`).join('')}
                        </svg>
                    `;
                })
            } else {
                response.json().then(body => {
                    this.innerHTML=`
                        <pre>${JSON.stringify(body)}</pre>
                        <pre>${response.status}</pre>
                        <pre>${response.statusText}</pre>
                    `
                })
            };
        })
        .catch(e=> this.innerHTML=e)
    }
  });