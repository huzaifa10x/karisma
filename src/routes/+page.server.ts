import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
    const [homeRes, doctorRes, serviceRes, departmentsRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/homepage"),
        fetch("https://admin.karismamc.com/api/doctors"),
        fetch("https://admin.karismamc.com/api/homepage?banner_type=department"),
        fetch("https://admin.karismamc.com/api/departments"),
    ]);

    if (!homeRes.ok || !doctorRes.ok || !serviceRes.ok || !departmentsRes.ok) {
        throw new Error("Failed to fetch data");
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