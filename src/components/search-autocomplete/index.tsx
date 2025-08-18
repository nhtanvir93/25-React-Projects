import { FormEvent, useState } from "react";
import styles from "./style.module.css";
import Suggestions from "./suggestions";

export interface Recipe {
  id: number;
  name: string;
}

const searchAPI = "https://dummyjson.com/recipes/search?q=";

const SearchAutocomplete = () => {
  const [searchKey, setSearchKey] = useState("");
  const [recipies, setRecipies] = useState<Recipe[]>([]);

  const search = async (newSearchKey: string) => {
    try {
      const res = await fetch(searchAPI + newSearchKey.trim().toLowerCase());
      if (!res.ok) throw new Error("No search result found");

      const data = await res.json();
      setRecipies(data.recipes);
    } catch (error) {
      console.log("Issue occured while searching recipies", error);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search(searchKey);
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
          <div className={styles.formControlContainer}>
            <input
              value={searchKey}
              onChange={(event) => setSearchKey(event.target.value)}
              type="text"
              className={styles.formControl}
              placeholder="Search ..."
            />
            {recipies.length > 0 && (
              <Suggestions searchKey={searchKey} recipies={recipies} />
            )}
          </div>
          <button type="submit" className={styles.btn}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchAutocomplete;
