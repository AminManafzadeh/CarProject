import { useState } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleSearch = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      toast.error("Please enter minimum and maximum price!!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={min}
          onChange={(e) => setMin(e.target.value)}
          type="number"
          placeholder="Inter min-price"
        />
        <input
          value={max}
          onChange={(e) => setMax(e.target.value)}
          type="number"
          placeholder="Inter max-price"
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
