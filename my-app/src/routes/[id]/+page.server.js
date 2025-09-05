export async function load({url, params}) {
    const memberResposnse = await fetch('https://fdnd.directus.app/items/person/'+params.id);
    const memberData = await memberResposnse.json();

    return {
        member: memberData.data
    };
}