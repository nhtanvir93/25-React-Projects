import { useState } from "react";
import styles from "./style.module.css";

interface Props {
  onChange: (username: string) => void;
}

const Search = ({ onChange }: Props) => {
  const [username, setUsername] = useState("");

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        name="search"
        className={styles.search}
        placeholder="Search by username ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="button"
        className={styles.btn}
        onClick={() => onChange(username)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
