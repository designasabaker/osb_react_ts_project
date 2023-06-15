export interface IIngredient {
    id: number;
    name: string;
    title: string;
    description: string;
    dateCreated: Date;
    img: string;
    details?: {
        detailedDescription: string;
        inci:string;
        clinicalStudies: string[];
        characteristics: string[];
        useLevel: string;
        origin: string;
    }
}