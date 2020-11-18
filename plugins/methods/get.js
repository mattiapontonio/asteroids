export default async function() {
    this.loading = true
    this.error = undefined
    try {
        const response = await fetch(this.url)
        this.response = response
        const data = await response.json()
        Object.assign(this, data)
    } catch (error){
        this.error = error
    } finally {
        this.loading = false
        this.error = undefined
    }
}