export default async function() {
    this.loading = true
    this.error = undefined
    try {
        this.response = await fetch(this.url)
        this.body = await this.response.json()
    } catch (error){
        this.error = error
    } finally {
        delete this.loading
        delete this.error
    }
}