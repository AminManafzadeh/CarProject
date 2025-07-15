import Image from "next/image";
import styles from "./TypeOfCar.module.css";
import Location from "../icons/Location";

function TypeOfCar({ item }) {
  return (
    <div className={styles.container}>
      <Image width={450} height={300} src={item?.image} alt={item.name} />
      <h4 className={styles.title}>{`${item?.name}  ${item?.model}`}</h4>
      <p className={styles.detail}>{`${item?.year}  _  ${item?.distance}`}</p>
      <div className={styles.footer}>
        <p className={styles.price}>$ {item?.price}</p>
        <div className={styles.location}>
          <p>{item?.location}</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default TypeOfCar;
