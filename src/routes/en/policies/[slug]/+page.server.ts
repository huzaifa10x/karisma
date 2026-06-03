import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const res = await fetch(
        'https://admin.karismamc.com/public/api/policies'
    );

    const response = await res.json();
    const policies = response.data;
    const slug = params.slug;
    const policy = policies.find(
        (item) => item.canonical_name === slug
    );
    if (!policy) {
        throw error(404, 'Policy not found');
    }
    return {
        policy
    };
}