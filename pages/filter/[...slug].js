import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import TypeOfCar from "../../components/templates/TypeOfCar";
import styles from "./[slug].module.css";
import Back from "../../components/icons/Back";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData?.filter(
    (item) => item.price > min && item.price < max
  );
  console.log(filteredData);

  if (!filteredData.length)
    return <h3 className={styles.h3}>Not Found any cars this range!!</h3>;

  return (
    <div className={styles.container}>
      <div onClick={() => router.back()} className={styles.back}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {filteredData?.map((item) => {
          return <TypeOfCar key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default FilteredCars;
