export async function load({ fetch }) {
    const [homeRes, doctorRes, serviceRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/homepage"),
        fetch("https://admin.karismamc.com/api/doctors"),
        fetch("https://admin.karismamc.com/api/servicepage"),
    ]);

    if (!homeRes.ok || !doctorRes.ok || !serviceRes.ok) {
        throw new Error("Failed to fetch data");
    }

    const homepage = await homeRes.json();
    const doctors = await doctorRes.json();
    const service = await serviceRes.json();

    console.log("Server Data:", { homepage, doctors, service });

    return {
        homepage,
        doctors,
        service
    };
}