import axios from 'axios';
export default async function() {
    this.loading = true
    this.errored = false
    try {
        const response = await axios.get(this.url)
        this.data = response.data
    } catch (error){
        this.errored = true
    } finally {
        this.loading = false
    }
}