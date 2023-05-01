import {useParams} from "react-router-dom";

export const SingleIngredient = () => {

  let { ingredientName } = useParams();

  return (
    <li>
      ingredient: {ingredientName}
    </li>
  );
};