import React, {useContext} from "react";
import {IngredientsContext} from "../context/IngredientsContext";
import {Link} from "react-router-dom";

export const IngredientsGrid = () => {
    const {
        sortedIngredients,
        setSortIngredientsBy,
        sortedMethods
    } = useContext(IngredientsContext);

    return (
        <section id="ingredients" className="w-4/5 py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="flex flex-row items-center justify-between p-3">
                <h1>All Products</h1>
                <div className="flex flex-row items-center justify-end p-3">
                    <p>Sort by: </p>
                    <select
                        onChange={(e) => {
                            e.preventDefault();
                            // console.log("e.target.value: ", e.target.value);
                            setSortIngredientsBy(e.target.value);
                        }}
                        className="font-general-medium
                                px-4
                                sm:px-6
                                py-2
                                border
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                dark:font-medium
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light">
                        <option value={"all"} className="text-sm sm:text-md">
                            All Projects
                        </option>
                        {sortedMethods.map((option:string) => (
                            <option className="text-normal sm:text-md" key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
                {sortedIngredients.map((ingredient:any, index:number) => {
                    return(
                        <Link to={`/ingredients/${ingredient.name}`} key={index}>
                            <div className="relative h-48 flex-grow px-3 py-4">
                                {/* half-transparent background image, z-0 */}
                                <div className="z-0 w-full h-full opacity-25 absolute overflow-hidden w-full h-48">
                                    <img
                                        className={"w-full h-full object-cover"}
                                        src={ingredient.img}
                                        alt={ingredient.title}
                                    />
                                </div>
                                {/* image w/ just 50% height, z-5 */}
                                <div className="z-5 w-full h-1/2 opacity-10 absolute overflow-hidden w-full h-48">
                                    <img
                                        className={"w-full h-1/2 object-cover"}
                                        src={ingredient.img}
                                        alt={ingredient.title}
                                    />
                                </div>
                                {/* texts, z-10 */}
                                <div className="absolute h-1/2 bottom-0 py-3 z-10">
                                    <h1
                                        className="font-bold mt-2 text-xl px-3 dark:text-ternary-light z-10"
                                    >
                                        {ingredient.title}
                                    </h1>
                                    <p
                                        className="text-gray-700 text-sm px-3 dark:text-ternary-light z-10"
                                    >
                                        {ingredient.description}
                                    </p>
                                </div>
                            </div>
                        </Link>)
                })}
            </div>
        </section>
    )
}