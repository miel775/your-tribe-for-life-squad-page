export async function load({ url }) {
    const squadresponse = await fetch('https://fdnd.directus.app/items/squad')
    const  squaddata = await squadresponse.json();

    return {squad: squaddata.data};

}