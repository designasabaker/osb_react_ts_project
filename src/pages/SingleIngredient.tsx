import {useParams} from "react-router-dom";

export const SingleIngredient = () => {

  let { ingredient } = useParams();

  return (
    <li>
      ingredient: {ingredient}
    </li>
  );
};