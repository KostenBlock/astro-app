/**
 * Структура литера
 */
export interface Letter {
    id: number;
    parent: number;
    name: string;
    construction_year: string;
    num: string;
    doors: number[] | null;
    label: string;
    address: string;
    cadastral_number: string;
}

/**
 * Структура ЖК
 */
export interface Complex {
    id: number;
    address_id: number;
    name: string;
    address: string;
    city: string;
    address_full: string;
    order: number;
    latitude: string;
    longitude: string;
}

/**
 * Структура Планировки
 */
export interface LayoutI {
    id: number;
    area: number;
    kitchen_area: number;
    living_area: number;
    mortage_sum: number;
    mortage_percent: number;
    floor: number;
    door: number;
    layout_id: number;
    num: number;
    name: string;
    price: number;
    status: number;
    type: number;
    room: number;
    layouts_url: string;
    svg_path: string;
    sum_price: number;
    price_with_pv: number;
    price_without_pv: number;
    duplex: boolean;
    stained_glass: boolean;
    letter_id: number;
    city_id: number;
    complex_id: number;
    floors_url: string;
    svg_floor_height: number;
    svg_floor_width: number
    svg_path_second: string;
    letter: Letter;
    complex: Complex;
    rotation_angle: number;
}
