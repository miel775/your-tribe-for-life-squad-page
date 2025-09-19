export async function load({ url }) {
    try {
        const squadsResponse = await fetch("https://fdnd.directus.app/items/squad?filter[cohort][_eq]=2526");
        if (!squadsResponse.ok) {
            console.error('Failed to fetch squads:', squadsResponse.status, squadsResponse.statusText);
            return { squads: [] };
        }
        const squadsData = await squadsResponse.json();
        if (!squadsData.data || !Array.isArray(squadsData.data)) {
            console.error('Squads data is not an array:', squadsData);
            return { squads: [] };
        }
        return { squads: squadsData.data };
    } catch (error) {
        console.error('Error fetching squads:', error);
        return { squads: [] };
    }
}