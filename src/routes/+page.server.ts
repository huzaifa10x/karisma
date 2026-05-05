export async function load({ fetch }) {
    const [homeRes, doctorRes, serviceRes, departmentsRes] = await Promise.allSettled([
        fetch("https://admin.karismamc.com/api/homepage"),
        fetch("https://admin.karismamc.com/api/doctors"),
        fetch("https://admin.karismamc.com/api/servicepage"),
        fetch("https://admin.karismamc.com/api/departments"),
    ]);

    if (!homeRes.ok || !doctorRes.ok || !serviceRes.ok || !departmentsRes.ok) {
        // throw new Error("Failed to fetch data");
    }

    const homepage = await homeRes.json();
    const doctors = await doctorRes.json();
    const service = await serviceRes.json();
    const departments = await departmentsRes.json();

    console.log("Server Data:", { homepage, doctors, service, departments });

    return {
        homepage,
        doctors,
        service,
        departments
    };
}