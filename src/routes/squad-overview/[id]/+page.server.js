export async function load({ params }) {
  const { id } = params;
  try {
    const res = await fetch(`https://fdnd.directus.app/items/squad/${id}`);
    if (!res.ok) {
      return { squad: null, members: [] };
    }
    const data = await res.json();

    const membersRes = await fetch(
      `https://fdnd.directus.app/items/person?filter[squads][squad_id][_eq]=${id}`
    );
    const membersData = await membersRes.json();

    return { squad: data.data, members: membersData.data };
  } 
  catch (error) {
    console.log('Error:', error);
    return { squad: null, members: [] };
  }
}
