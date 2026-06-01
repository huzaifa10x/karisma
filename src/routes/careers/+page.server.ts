export async function load({ fetch }: any) {
    const [careersRes, careersMetaRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/careers"),
        fetch("https://admin.karismamc.com/api/metatagall?slug=careers"),
    ]);

    if (!careersRes.ok || !careersMetaRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const careersPage = await careersRes.json();
    const careersMeta = await careersMetaRes.json();
    return {
        careersPage,
        careersMeta,
    };
}