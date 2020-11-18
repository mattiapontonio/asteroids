export default function() {
    this.loading = true
    this.error = false
    fetch(this.url)
    .then(response => {
        this.response = response
        this.loading = false
        return response.json()
    })
    .then(body => {
        this.body = body
    })
    .catch(error => {
        this.error = error
    })
}