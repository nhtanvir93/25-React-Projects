import { Recipe } from ".";
import styles from "./style.module.css";

interface Props {
  recipies: Recipe[];
}

const Suggestions = ({ recipies }: Props) => {
  return (
    <div className={styles.suggestionContainer}>
      <h3 className={styles.suggesstionTitle}>Suggestions</h3>
      <ul className={styles.suggestions}>
        {recipies.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
