import {IIngredient} from "./IIngredient";
import ImgLuodingCinnamon from "../../assets/images/luodingCinnamon.jpg";

export const luodingCinnamon: IIngredient = {
    id: 1,
    name: "luodingCinnamon",
    title: "Luoding Cinnamon",
    description: "Luoding Cinnamon is a type of cinnamon that is grown in Luoding.  ",
    dateCreated: new Date("2019-01-16"),
    img:ImgLuodingCinnamon,
    details:{
        detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        inci:"Caprylic/Capric Triglyceride, Hexylresorcinol, Ethyl Linoleate",
        clinicalStudies: [
            "Clinically proven for skin lightening & even toning",
            "Significant skin lightening effect only in 4 weeks",
            "Significant improvement in skin complexion",],
        characteristics: [
            "Excellent safety profile",
            "Synergistic skin lightener blend",
            "Easy to formulate"],
        useLevel: "2 - 4%",
        origin: "Organic synthesis",
    }
}