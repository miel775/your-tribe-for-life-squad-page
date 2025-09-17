export async function load({ params }) {
  const { id } = params;
  try {
    const res = await fetch(`https://fdnd.directus.app/items/squad/${id}`);
    if (!res.ok) {
      return { squad: null };
    }
    const data = await res.json();
    return { squad: data.data };
  } catch (error) {
    return { squad: null };
  }
}