import type { PageServerLoad } from "./$types.js";
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, url }) => {
    // 1. Redirection Logic: Agar URL sirf "/" hai, to "/en/" par bhejen
    if (url.pathname === '/') {
        throw redirect(307, '/en/');
    }

    // 2. Data Fetching
    const [homeRes, doctorRes, serviceRes, departmentsRes, metaRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/homepage"),
        fetch("https://admin.karismamc.com/api/doctors"),
        fetch("https://admin.karismamc.com/api/homepage?banner_type=department"),
        fetch("https://admin.karismamc.com/api/departments"),
        fetch("https://admin.karismamc.com/public/api/metatagall?slug=home"),
    ]);

    // 3. Error Handling
    if (!homeRes.ok || !doctorRes.ok || !serviceRes.ok || !departmentsRes.ok || !metaRes.ok) {
        throw new Error("Failed to fetch data");
    }

    return {
        homepage: await homeRes.json(),
        doctors: await doctorRes.json(),
        service: await serviceRes.json(),
        departments: await departmentsRes.json(),
        homeMeta: await metaRes.json()
    };
};