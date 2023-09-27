export interface HeadSectionI {
    header: string;
    button: string;
    lead: string;
    images: [
        {
            format: string;
            formatTablet: string;
            formatMobile: string;
            imageKey: string;
            imageKeyTablet: string;
            imageKeyMobile: string;
        }
    ],
    yandex_goal: string;
}
