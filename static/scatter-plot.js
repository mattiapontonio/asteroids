customElements.define('scatter-plot', class extends HTMLElement {
    constructor() {
      super();
      fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-01&end_date=2021-04-01&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(body => {
          const s = document.createElement("svg");
          const o = body.near_earth_objects["2021-04-01"].map(function(e, i, a) {
            return {
              id: e.id,
              cx: e.close_approach_data[0].relative_velocity.kilometers_per_second,
              cy: e.close_approach_data[0].miss_distance.kilometers,
              r: e.estimated_diameter.kilometers.estimated_diameter_max
            }
          });
          s.setAttribute("viewBox", [
            Math.min.apply(null, o.map(e => e.cx)),
            Math.min.apply(null, o.map(e => e.cy)),
            Math.max.apply(null, o.map(e => e.cx)),
            Math.max.apply(null, o.map(e => e.cy))
          ].join(" "));
          s.setAttribute("height", "100");
          s.setAttribute("width", "100");
          s.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          s.setAttribute("stroke", "red");
          s.setAttribute("fill", "grey");
          s.style.setProperty('display', "block");
          s.style.setProperty('width', "auto");
          s.style.setProperty('height', "300px");
          o.map(e => {
            const c = document.createElement("circle");
            c.setAttribute("id", e.id);
            c.setAttribute("cx", e.cx);
            c.setAttribute("cy", e.cy);
            c.setAttribute("r", e.r);
            c.setAttribute("stroke", "black");
            c.setAttribute("stroke-width", "3");
            c.setAttribute("fill", "red");
            s.appendChild(c)
          });
          this.appendChild(s)
        })
    }
  });