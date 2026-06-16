import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
    const Service = params.subservice;
    const res = await fetch(`https://admin.karismamc.com/api/subservicepage/${Service}`);
    if (!res.ok) {
        throw error(404, 'department not found');
    }
    const service = await res.json();
    return {
        service
    };
}
