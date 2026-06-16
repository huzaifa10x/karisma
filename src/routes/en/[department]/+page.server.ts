import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
    const { department: deptSlug, meta: metaSlug } = params;

    const [resDept] = await Promise.all([
            fetch(`https://admin.karismamc.com/api/departments/${deptSlug}`),
        ]);

        // Validate both responses
        if (!resDept.ok) throw error(404, 'Department not found');

        // Parse JSON
        const [department] = await Promise.all([
            resDept.json(),
        ]);

        return {
            department,
        };
 
}