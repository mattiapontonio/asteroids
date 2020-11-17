export default function () {
    const url = new URL(location);
    return url.searchParams.get('start_date');
}