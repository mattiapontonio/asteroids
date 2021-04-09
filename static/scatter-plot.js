customElements.define('scatter-plot', class extends HTMLElement {
    constructor() {
      super();
      fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-01&end_date=2021-04-01&api_key=DEMO_KEY")
        .then(response => {
            if(response.ok) {
                response.json().then(body => {
                    const o = body.near_earth_objects["2021-04-01"]
                    .map(function(e, i, a) {
                        return {
                            x: e.close_approach_data[0].relative_velocity.kilometers_per_second,
                            y: e.close_approach_data[0].miss_distance.kilometers
                        }
                    });
                    this.innerHTML=`
                        <div>${response.statusText}</div>
                        <svg 
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
                            style="display: block;
                            height: auto;">
                            ${o.map(e => `<circle 
                                stroke="black" 
                                stroke-width="2%" 
                                fill="red" 
                                cx=${e.x}
                                cy=${e.y}  
                                r="4%">
                            </circle>`)}        
                        </svg>
                    `;
                })
            } else {
                this.innerHTML=response.statusText
            };
            console.table(response);
        })
        .catch(e=> this.innerHTML=e)
    }
  });