import { fail } from '@sveltejs/kit';

// 1. Data Fetching (The Load function)
export async function load({ fetch }: any) {
    const [careersRes, careersMetaRes, careersBannerRes] = await Promise.all([
        fetch("https://admin.karismamc.com/api/careers"),
        fetch("https://admin.karismamc.com/api/metatagall?slug=careers"),
        fetch("https://admin.karismamc.com/api/homepage?banner_type=careers")
    ]);

    if (!careersRes.ok || !careersMetaRes.ok) {
        throw new Error("Failed to fetch data");
    }

    return {
        careersPage: await careersRes.json(),
        careersMeta: await careersMetaRes.json(),
        careerBanner: await careersBannerRes.json()
    };
}

// 2. Form Handling (The Actions)
export const actions = {
    apply: async ({ request }) => {
        const formData = await request.formData();
        
        // Log to verify the names match before sending to API
        console.log("Form Data Keys:", Array.from(formData.keys()));

        const response = await fetch("https://admin.karismamc.com/api/career-application", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (!response.ok) {
            return fail(400, { 
                success: false, 
                message: result.message || "Submission failed. Please check your file format/size." 
            });
        }

        return { success: true, message: "Application submitted successfully!" };
    }
};