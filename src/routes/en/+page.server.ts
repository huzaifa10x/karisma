import type { PageServerLoad } from "./$types.js";
import { redirect } from '@sveltejs/kit';


export const load: PageServerLoad = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
    const [homeRes, doctorRes, serviceRes, departmentsRes, metaRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/homepage"),
        fetch("https://admin.karismamc.com/api/doctors"),
        fetch("https://admin.karismamc.com/api/homepage?banner_type=department"),
        fetch("https://admin.karismamc.com/api/departments"),
        fetch("https://admin.karismamc.com/public/api/metatagall?slug=home"), 
      
    ]);

    if (!homeRes.ok || !doctorRes.ok || !serviceRes.ok || !departmentsRes.ok || !metaRes.ok) {
        throw new Error("Failed to fetch data");
    }

    const homepage = await homeRes.json();
    const doctors = await doctorRes.json();
    const service = await serviceRes.json();
    const departments = await departmentsRes.json();
    const homeMeta = await metaRes.json();
    return {
        homepage,
        doctors,
        service,
        departments,
        homeMeta
    };
}