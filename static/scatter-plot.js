customElements.define('scatter-plot', class extends HTMLElement {
    constructor() {
      super();
      fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-01&end_date=2021-04-01&api_key=DEMO_KEY")
        .then(response => {
            response.json();
            console.table(response);
        })
        .then(body => {
          const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          const o = body.near_earth_objects["2021-04-01"].map(function(e, i, a) {
            return {
              id: e.id,
              cx: e.close_approach_data[0].relative_velocity.kilometers_per_second,
              cy: e.close_approach_data[0].miss_distance.kilometers,
              r: e.estimated_diameter.kilometers.estimated_diameter_max
            }
          });
          s.setAttributeNS("http://www.w3.org/2000/svg","viewBox", [
            Math.min.apply(null, o.map(e => e.cx)),
            Math.min.apply(null, o.map(e => e.cy)),
            Math.max.apply(null, o.map(e => e.cx)),
            Math.max.apply(null, o.map(e => e.cy))
          ].join(" "));
          s.setAttributeNS("http://www.w3.org/2000/svg","height", "100");
          s.setAttributeNS("http://www.w3.org/2000/svg","width", "100");
          s.setAttributeNS("http://www.w3.org/2000/svg","stroke", "red");
          s.setAttributeNS("http://www.w3.org/2000/svg","fill", "grey");
          s.style.setProperty('display', "block");
          s.style.setProperty('width', "auto");
          s.style.setProperty('height', "300px");
          o.map(e => {
            const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c.setAttributeNS("http://www.w3.org/2000/svg","id", e.id);
            c.setAttributeNS("http://www.w3.org/2000/svg","cx", e.cx);
            c.setAttributeNS("http://www.w3.org/2000/svg","cy", e.cy);
            c.setAttributeNS("http://www.w3.org/2000/svg","r", 50);
            c.setAttributeNS("http://www.w3.org/2000/svg","stroke", "black");
            c.setAttributeNS("http://www.w3.org/2000/svg","stroke-width", "3");
            c.setAttributeNS("http://www.w3.org/2000/svg","fill", "red");
            s.appendChild(c)
          });
          this.innerHTML=`
            <div>${response.statusText}</div>
            ${s.outerHTML}
          `;
        })
        .catch(e=> this.innerHTML=e)
    }
  });