


export async function getDirectusItemsByAxiosOnClient(name: string, param: string) {
    try {
        const response = await fetch(`${import.meta.env.DIRECTUS}/items/${name}${param}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${import.meta.env.STATIC_TOKEN}`
            }
        });

        const { data, error } = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
