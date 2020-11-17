export default function () {
    const url = new URL(location);
    const param = url.searchParams.get('date');
    return new Date(param).toISOString();
}