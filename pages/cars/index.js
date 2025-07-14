import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";

function Cars() {
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Cars;
