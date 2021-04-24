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
                        </svg>
                    `;
                    o.forEach((e,i,a) => {
                        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                        circle.setAttributeNS(null, "cx", (()=>{
                            const g = a.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second);
                            return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                        })());
                        circle.setAttributeNS(null, "cy", (()=>{
                            const g = a.map(z=>z.close_approach_data[0].miss_distance.kilometers);
                            return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                        })());
                        circle.setAttributeNS(null, "r", 10);
                        circle.onclick=function(){
                            const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
                            foreignObject.setAttributeNS(null, "x", this.cx.baseVal.valueInSpecifiedUnits);
                            foreignObject.setAttributeNS(null, "y", this.cy.baseVal.valueInSpecifiedUnits);
                            svg.appendChild(foreignObject);
                            foreignObject.innerHTML=`
                                <div xmlns="http://www.w3.org/1999/xhtml">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed mollis mollis mi ut ultricies. Nullam magna ipsum,
                                    porta vel dui convallis, rutrum imperdiet eros. Aliquam
                                    erat volutpat.
                                </div>
                            `;
                            foreignObject.focus();
                            foreignObject.onblur=foreignObject.remove;
                        }
                        svg.appendChild(circle);
                    });
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