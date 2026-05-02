export async function load({ fetch }) {
    const res = await fetch('https://admin.karismamc.com/api/homepage');
    if (!res.ok) {
        throw new Error('Failed to fetch homepage data');
    }
    const data = await res.json();
    return {
        AboutUs: data?.About_us || []
    };
}