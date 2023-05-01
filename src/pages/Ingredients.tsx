import OceanImg from "../assets/images/ocean.jpg";
import {Banner} from "../components/Banner";

export const Ingredients = () => {

  return (
      <>
          <Banner
              imgUrl={OceanImg}
              isFullHeight={false}
              title={"Contact Us"}
              caption={""}
              hasBtn={false}
          />
          <li>
              Ingredients
          </li>
      </>

  );
};