export async function load({ fetch }: any) {
    const [res] = await Promise.all([
        fetch("https://admin.karismamc.com/api/departments"),
    ]);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const departmentsPage = await res.json();
    return {
        departmentsPage,
    };
}