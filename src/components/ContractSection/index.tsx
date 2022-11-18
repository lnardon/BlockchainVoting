import { useState } from "react";

import styles from "./styles.module.css";

function ContractSection() {
  const [pollId, setPollId] = useState("");

  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>
        Add the poll identifier below to interact with it
      </h3>
      <div>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setPollId(e.target.value)}
        />
        <button onClick={() => alert(true)} className={styles.button}>
          Find Poll
        </button>
      </div>
      {pollId.length > 1 && (
        <div className={styles.contractInteraction}>
          <h4>Poll ID: #{pollId}</h4>
        </div>
      )}
    </div>
  );
}

export default ContractSection;
