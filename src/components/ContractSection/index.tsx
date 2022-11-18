import styles from "./styles.module.css";

function ContractSection() {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>
        Add the poll identifier below to interact with it
      </h3>
      <div>
        <input type="text" className={styles.input} />
        <button onClick={() => alert(true)} className={styles.button}>
          Find Poll
        </button>
      </div>
    </div>
  );
}

export default ContractSection;
