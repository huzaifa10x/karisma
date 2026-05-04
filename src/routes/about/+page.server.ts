export async function load({ fetch }) {
    const [res] = await Promise.all([
        fetch("https://admin.karismamc.com/api/aboutuspage"),
    ]);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const aboutPage = await res.json();
    return {
        aboutPage,
    };
}