import type {LayoutI} from "~/helpers/interfaces/layout.interface.ts";


/**
 * Запрос на получение данных одной планировки
 * @param id
 */
export const getSingleLayout = async (id: string | string[] | undefined) => {
    try {
        const response = await fetch(`${import.meta.env.LAYOUTS_URL}/layouts/${id}`);
        const data: LayoutI = await response.json();
        return data;
    } catch (error) {
        return null;
    }
};
