import { useState } from "react";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

import styles from "./App.module.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

function App() {
  const [web3, setWeb3] = useState(new Web3());
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  async function activate() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        checkAccount();
      } catch (err) {
        console.log("user did not add account...", err);
      }
    }
  }

  async function checkAccount() {
    let web3 = new Web3(window.ethereum);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const metamaskBalance = await web3.eth.getBalance(accounts[0]);
    setBalance(metamaskBalance);
  }

  function isLoggedIn() {
    if (account.length < 1) {
      activate();
      return false;
    }
    return true;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blockchain Voting</h1>
      {!account && (
        <button className={styles.connectBtn} onClick={activate}>
          Connect Metamask
        </button>
      )}
      <div>{balance}</div>
    </div>
  );
}

export default App;
