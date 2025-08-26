import { useState } from "react";
import styles from "./style.module.css";

interface Props {
  initValue: string;
  onSearch: (searchKey: string) => void;
}

const Search = ({ initValue, onSearch }: Props) => {
  const [searchKey, setSearchKey] = useState(initValue);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="Search ..."
          value={searchKey}
        />
        <button
          className={styles.btn}
          type="button"
          onClick={() => onSearch(searchKey)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
