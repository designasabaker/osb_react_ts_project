import {Link, useParams} from "react-router-dom";
import React, {useContext} from "react";
import {ingredients} from "../data/Ingredients";
import OceanImg from "../assets/images/ocean.jpg";
import {Banner} from "../components/Banner";

export const SingleIngredient = () => {

  const { ingredientName } = useParams();
  const ingredient = ingredients.find((ingredient:any) => ingredient.name === ingredientName);

  return (
      <>
          <Banner
              imgUrl={OceanImg}
              isFullHeight={false}
              title={ingredient ? ingredient.name.toUpperCase() : "Ingredient"}
              caption={""}
              hasBtn={false}
          />
          {ingredient &&
              <div>
                  <div className="w-full flex flex-row justify-center">
                      <img src={ingredient.img} alt={ingredient.title} />
                      <div>
                          <h1>{ingredient.title}</h1>
                          <p>{ingredient.details?.detailedDescription}</p>
                          <button>View Publications</button>
                          <button>Contact us for further information</button>
                      </div>
                  </div>
                  <div>
                      <h1>Product Summary</h1>
                      <h3>INCI</h3>
                      <p>{ingredient.details?.inci}</p>
                      <h3>Clinical Studies</h3>
                      {ingredient.details?.clinicalStudies.map((study:any,index) => {
                          return <p key={index}>{study}</p>})}
                      <h3>Characteristics</h3>
                      {ingredient.details?.characteristics.map((item:any,index) => {
                          return <p key={index}>{item}</p>})}
                      <h3>Use Level</h3>
                      <p>{ingredient.details?.useLevel}</p>
                      <h3>Origin</h3>
                      <p>{ingredient.details?.origin}</p>
                  </div>
                  <Link to="/ingredients">Back to Ingredients</Link>
              </div>}
      </>)
};