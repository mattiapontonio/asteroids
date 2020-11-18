export default async function() {
    this.loading = true
    try {
        this.response = await fetch(this.url)
    } catch (error){
        this.error = error
    } finally {
        this.loading = false
    }
}