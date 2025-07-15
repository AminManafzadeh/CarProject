import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import Back from "../../components/icons/Back";
import styles from "./CarId.module.css";
import TypeOfCar from "../../components/templates/TypeOfCar";

function CarType() {
  const router = useRouter();
  const { carId } = router.query;
  const typeOfCars = carsData.filter((car) => car.category === carId);
  console.log(typeOfCars);

  return (
    <div className={styles.container}>
      <div onClick={() => router.back()} className={styles.back}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {typeOfCars?.map((item) => {
          return <TypeOfCar key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default CarType;
