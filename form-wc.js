customElements.define(
    'form-wc',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        get start_date() {
            return new URLSearchParams(location.search).get('start_date')
        }
        get end_date() {
            return new URLSearchParams(location.search).get('end_date')
        }
        connectedCallback() {
            this.innerHTML = `
        <form id="form">
          <legend>Legend</legend>
          <label for="api_key">API key</label>
          <input
            type="text"
            id="api_key"
            name="api_key"
            placeholder="DEMO_KEY"
            value="${this.api_key}"
            required
          />
          <label for="start_date">start_date</label>
          <input
            id="start_date"
            name="start_date"
            type="date"
            required
            value="${this.start_date}"
            step="1"
            oninput="
                end_date.value=new Date(this.valueAsNumber+604800000).toISOString().split('T')[0];
                end_date.max=new Date(this.valueAsNumber+604800000).toISOString().split('T')[0];
                end_date.min=new Date(this.valueAsNumber-604800000).toISOString().split('T')[0];
            "
          />
          <label for="end_date">end_date</label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            value="${this.end_date}"
            step="1"
            required
          />
        <button type="submit">Submit</button>
      </form>`
        }
    }
)