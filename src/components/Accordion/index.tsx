import { useState } from "react";
import styles from "./Accordion.module.css";
import accordions from "./data";

export function Accordion() {
  const [isSingleSelection, setIsSingleSelection] = useState(true);
  const [selected, setSelected] = useState<number[]>([]);

  function toggleMode() {
    setIsSingleSelection(!isSingleSelection);
    setSelected([]);
  }

  function handleAccordionClick(idx: number) {
    if (isSingleSelection) handleSingleSelection(idx);
    else handleMultipleSelection(idx);
  }

  function handleMultipleSelection(idx: number) {
    const foundAt = selected.indexOf(idx);

    if (foundAt === -1) setSelected([idx, ...selected]);
    else {
      const tempSelected = [...selected];
      tempSelected.splice(foundAt, 1);
      setSelected(tempSelected);
    }
  }

  function handleSingleSelection(idx: number) {
    if (selected.length === 0) setSelected([idx]);
    else {
      if (selected[0] !== idx) setSelected([idx]);
      else setSelected([]);
    }
  }

  return (
    <div>
      <h2 className={styles.componentHeader}>Accordion</h2>

      <div className={styles.toggleCheckbox}>
        <input
          type="checkbox"
          onChange={toggleMode}
          checked={isSingleSelection}
        />{" "}
        Single Selection
      </div>

      {accordions &&
        accordions.map((accordion, idx) => (
          <div
            key={`accordion-${idx}`}
            className={styles.accordionContainer}
            onClick={() => handleAccordionClick(idx)}
          >
            <div className={styles.accordion}>
              <div className={styles.accordionTitleContainer}>
                <h3 className={styles.accordionTitle}>{accordion.title}</h3>
                <span>{selected.includes(idx) ? "-" : "+"}</span>
              </div>
              <div
                className={`${styles.accordionDescriptionContainer} ${
                  selected.includes(idx)
                    ? styles.accordionDescriptionContainerOpen
                    : ""
                }`}
              >
                <p className={styles.accordionDescription}>
                  {accordion.description}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
