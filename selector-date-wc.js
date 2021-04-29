customElements.define(
    'selector-date-wc',
    class extends HTMLElement {
        constructor() {
            super()
        }
        get date() {
            return new URLSearchParams(location.search).get('date')
        }
        connectedCallback() {
            const input = document.createElement('input')
            const label = document.createElement('label')
            Object.assign(input, {
                id: 'date',
                type: 'date',
                name: 'date',
                value: this.date,
                onchange: function() {
                    const url = new URL(window.location)
                    url.searchParams.set('date', this.value)
                    window.history.pushState({}, '', url)
                },
            })
            Object.assign(label, {
                htmlFor: 'date',
                innerText: 'Date',
            })
            this.append(label, input)
        }
    }
)