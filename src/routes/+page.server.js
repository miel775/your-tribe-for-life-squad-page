export async function load({ url, params}) {
    const memberResponse = await fetch('https://fdnd.directus.app/items/squad')
    const  memberdata = await memberResponse.json();

    return {squad: memberdata.data};
}

