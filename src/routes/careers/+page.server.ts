export async function load({ fetch }: any) {
    const [res] = await Promise.all([
        fetch("https://admin.karismamc.com/api/careers"),
    ]);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const careersBanner = await res.json();
    return {
        careersBanner,
    };
}