import {ingredients} from '../../data/Ingredients';
import {useState, createContext, ReactNode, useEffect} from 'react';
import {IIngredient} from "../../data/Ingredients/IIngredient";

export const IngredientsContext = createContext({});

export const IngredientsProvider = (props:any) => {
    const [ingredientsData, _] = useState(ingredients);
    const [sortIngredientsBy, setSortIngredientsBy] = useState('');
    const [sortedIngredients, setSortedIngredients] = useState(ingredients);

    const sortedMethods = ["date", "a-z", "z-a"];
    // sort ingredients by name/alphabetically
    useEffect(() => {
        setSortedIngredients(sortIngredientsBy === "date" ?
            [...ingredientsData].sort((a, b) => b.dateCreated.getDate() - a.dateCreated.getDate()) :
            sortIngredientsBy === "a-z" ? [...ingredientsData].sort() :
            sortIngredientsBy === "z-a" ? [...ingredientsData].sort().reverse() :
            ingredients);
        // console.log("sortedIngredients: ", sortedIngredients);
    },[sortIngredientsBy]);

    return (
        <IngredientsContext.Provider
            value={{
                ingredientsData,
                sortedIngredients,
                setSortIngredientsBy,
                sortedMethods}}>
            {props.children}
        </IngredientsContext.Provider>
    )
}