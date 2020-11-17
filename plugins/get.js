export default async function() {
    this.loading = true
    this.error = undefined
    try {
        const response = await fetch(this.url)
        const data = await response.json()
        this.data = data
    } catch (error){
        this.error = error
    } finally {
        this.loading = false
    }
}