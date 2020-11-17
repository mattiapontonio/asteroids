export default function () {
    const url = new URL(location);
    return url.searchParams.get('end_date');
}