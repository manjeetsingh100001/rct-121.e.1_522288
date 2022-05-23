import styles from "./Button.module.css";

function Button({ title, onClick, disabled, id }) {
  return (
    <button id={id} disabled={disabled} data-testid="button-component" onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
}

export default Button;
