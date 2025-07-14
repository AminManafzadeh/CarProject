import Card from "../module/Card";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data?.map((car) => {
        return <Card key={car.id} car={car} />;
      })}
    </div>
  );
}

export default CarsPage;
