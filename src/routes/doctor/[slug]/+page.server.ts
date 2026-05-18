import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
    const Doctor = params.slug;
    const res = await fetch(`https://admin.karismamc.com/api/doctor/${Doctor}`);
    if (!res.ok) {
        throw error(404, 'department not found');
    }
    const doctor = await res.json();
    return {
        doctor
    };
}