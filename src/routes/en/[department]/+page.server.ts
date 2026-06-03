import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
    const Department = params.department;
    const res = await fetch(`https://admin.karismamc.com/api/departments/${Department}`);
    if (!res.ok) {
        throw error(404, 'department not found');
    }
    const department = await res.json();
    return {
        department
    };
}