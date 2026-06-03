export async function load({ fetch }: any) {
    const [doctorRes, doctorMetaRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/doctors"),
        fetch("https://admin.karismamc.com/api/metatagall?slug=our-doctors"),
    ]);

    if (!doctorRes.ok || !doctorMetaRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const doctorsPage = await doctorRes.json();
    const doctorsMeta = await doctorMetaRes.json();
    return {
        doctorsPage,
        doctorsMeta
    };
}