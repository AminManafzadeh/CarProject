import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetail from "../../components/templates/CarDetail";

function CarDetailPage() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];

  console.log(carDetails);

  return (
    <div>
      <CarDetail data={carDetails} />
    </div>
  );
}

export default CarDetailPage;
