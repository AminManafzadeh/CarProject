import Image from "next/image";
import styles from "./Card.module.css";
import Location from "../icons/Location";
import Link from "next/link";

function Card({ car }) {
  return (
    <Link href={`/cars/${car.id}`}>
      <div className={styles.container}>
        <Image width={450} height={300} src={car?.image} alt={car.name} />
        <h4 className={styles.title}>{`${car?.name}  ${car?.model}`}</h4>
        <p className={styles.detail}>{`${car?.year}  _  ${car?.distance}`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {car?.price}</p>
          <div className={styles.location}>
            <p>{car?.location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
