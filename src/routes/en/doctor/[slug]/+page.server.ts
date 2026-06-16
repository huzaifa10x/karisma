import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
    const slug = params.slug;

    // Fetch both simultaneously to speed up page load
    const [doctorRes, listRes, sliderDoc] = await Promise.all([
        fetch(`https://admin.karismamc.com/api/doctor/${slug}`),
        fetch(`https://admin.karismamc.com/api/doctors`),
        fetch(`https://admin.karismamc.com/api/doctor/docSliderList/${slug}`)
    ]);

    if (!doctorRes.ok) {
        throw error(404, 'Doctor not found');
    }

    const doctor = await doctorRes.json();
    const listData = await listRes.json();
    const sliderDocData = await sliderDoc.json();

    return {
        doctor,
        allDoctors: listData.doctors || [] ,
        sliderDocData: sliderDocData.doctor || [] ,// Pass the full list to your component
    };
}