import OceanImg from "../assets/images/ocean.jpg";
import {Banner} from "../components/Banner";
import {IngredientsProvider} from "../components/context/IngredientsContext";
import {IngredientsGrid} from "../components/Ingredients/IngredientsGrid";

export const Ingredients = () => {

  return (
      <>
          <Banner
              imgUrl={OceanImg}
              isFullHeight={false}
              title={"Ingredients"}
              caption={""}
              hasBtn={false}
          />
          <IngredientsProvider>
                <div className="w-full flex flex-row justify-end">
                    <IngredientsGrid />
                </div>
          </IngredientsProvider>
      </>

  );
};