export async function load({ fetch }: any) {
    const [res] = await Promise.all([
        fetch("https://admin.karismamc.com/api/contactpage"),
    ]);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const contactPage = await res.json();
    return {
        contactPage,
    };
}