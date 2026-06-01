export async function load({ fetch }: any) {
    const [aboutRes, aboutMetaRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/aboutuspage"),
        fetch("https://admin.karismamc.com/public/api/metatagall?slug=about-us"),
    ]);

    if (!aboutRes.ok || !aboutMetaRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const aboutPage = await aboutRes.json();
    const aboutMeta = await aboutMetaRes.json();
    return {
        aboutPage,
        aboutMeta,
    };
}