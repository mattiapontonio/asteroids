customElements.define(
    'selector-date-wc',
    class extends HTMLElement {
        constructor() {
            super()
        }
        get date() {
            return new URLSearchParams(location.search).get('date')
        }
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            const form = document.createElement('form')
            const inputs = [
                document.createElement('input'),
                document.createElement('input')
            ]
            const label = document.createElement('label')
            Object.assign(inputs[0], {
                id: 'form',
            })
            Object.assign(inputs[0], {
                id: 'date',
                type: 'date',
                name: 'date',
                value: this.date,
                onchange: function() {
                    this.form.submit()
                },
            })
            Object.assign(inputs[1], {
                type: 'hidden',
                name: 'api_key',
                value: this.api_key,
            })
            Object.assign(label, {
                htmlFor: 'date',
                innerText: 'Date',
            })
            form.append(label, ...inputs)
            this.append(form)
        }
    }
)