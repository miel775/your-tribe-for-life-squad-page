export async function load({ url, params}) {
    const memberResponse = await fetch('https://fdnd.directus.app/items/person')
    const  memberdata = await memberResponse.json();

    return {squad: memberdata.data};
}

