import Image from "next/image";
import styles from "./CarDetail.module.css";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

function CarDetail({ data }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        width={890}
        height={600}
        src={data?.image}
        alt={data?.name}
      />
      <h3 className={styles.header}>
        {data?.name} {data?.model}
      </h3>
      <div className={styles.details}>
        <div>
          <div className={styles.flex}>
            <Company />
            <p>Company</p>
          </div>
          <span>{data?.name}</span>
        </div>
        <div>
          <div className={styles.flex}>
            <Model />
            <p>Model</p>
          </div>
          <span>{data?.model}</span>
        </div>
        <div>
          <div className={styles.flex}>
            <Calender />
            <p>First registration</p>
          </div>
          <span>{data?.year}</span>
        </div>
        <div>
          <div className={styles.flex}>
            <Road />
            <p>Kms driven</p>
          </div>
          <span>{data?.distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.flex}>
            <Location />
            <p>Location</p>
          </div>
          <span>{data?.location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <h1 className={styles.descriptionTitle}>Extra Information</h1>
        <p className={styles.descriptionText}>{data?.description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <div className={styles.flex}>
            <Money />
            <p>Price :</p>
          </div>
          <span>$ {data?.price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetail;
