import {Link, useParams} from "react-router-dom";
import React, {useContext} from "react";
import {ingredients} from "../data/Ingredients";
import OceanImg from "../assets/images/ocean.jpg";
import {Banner} from "../components/Banner";
import Sidebar from "../components/Sidebar";
import ContactUsBtn from "../components/ImgredientComponents/ContactUsBtn";
import ViewPublicationBtn from "../components/ImgredientComponents/ViewPublicationBtn";

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
              <>
                  <div className="w-full flex flex-row justify-center px-20">
                      <img
                          className={"w-1/2 p-10"}
                          src={ingredient.img} alt={ingredient.title} />
                      <div className={"flex flex-col w-1/2 p-10"}>
                          <h1>{ingredient.title}</h1>
                          <p>{ingredient.details?.detailedDescription}</p>
                          <ViewPublicationBtn name={"View Publications"} url={"/"} />
                          <ContactUsBtn />
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
              </>}
          <Sidebar appearThreshold={0.1} vanishThreshold={0.1} />
      </>)
};