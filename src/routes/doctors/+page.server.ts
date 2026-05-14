export async function load({ fetch }: any) {
    const [res] = await Promise.all([
        fetch("https://admin.karismamc.com/api/doctors"),
    ]);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const doctorsPage = await res.json();
    return {
        doctorsPage,
    };
}