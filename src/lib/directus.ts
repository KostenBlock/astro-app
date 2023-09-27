/**
 * Получение данных из Directus(Вызов сервера)
 * @param name
 */
export async function getDirectusData<T>(name: string) {
    try {
        const response = await fetch(`${import.meta.env.DIRECTUS}/items/${name}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${import.meta.env.DIRECTUS_STATIC_TOKEN}`
            },
        });

        const { data }: { data: T }  = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}
