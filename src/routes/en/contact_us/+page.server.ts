export async function load({ fetch }: any) {
    const [res, meta] = await Promise.all([
        fetch("https://admin.karismamc.com/api/contactpage"),
        fetch("https://admin.karismamc.com/public/api/metatagall?slug=contact_us")
    ]);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const contactPage = await res.json();
    const metaa = await meta.json();
    return {
        contactPage,
        metaa
    };
}