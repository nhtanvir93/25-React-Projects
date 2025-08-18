import { ReactNode } from "react";
import { Recipe } from ".";
import styles from "./style.module.css";

interface Props {
  recipies: Recipe[];
  searchKey: string;
  onRecipeClick: (selected: string) => void;
}

const Suggestions = ({ recipies, searchKey, onRecipeClick }: Props) => {
  const formattedRecipe = (recipe: string): ReactNode => {
    let first = recipe.toLowerCase().indexOf(searchKey.trim().toLowerCase());
    let last = first + (searchKey.length - 1);

    return (
      <>
        {recipe
          .split("")
          .map((char, idx) =>
            idx >= first && idx <= last ? (
              <span className={styles.highlight}>{char}</span>
            ) : (
              char
            )
          )}
      </>
    );
  };

  return (
    <div className={styles.suggestionContainer}>
      <h3 className={styles.suggesstionTitle}>Suggestions</h3>
      <ul className={styles.suggestions}>
        {recipies.map((recipe) => (
          <li key={recipe.id} onClick={() => onRecipeClick(recipe.name)}>
            {formattedRecipe(recipe.name)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
