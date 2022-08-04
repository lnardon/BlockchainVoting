import { useState } from "react";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

import styles from "./App.module.css";
import Modal from "./components/Modal";

declare global {
  interface Window {
    ethereum: any;
  }
}

function App() {
  const [web3, setWeb3] = useState(new Web3());
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalContentIndex, setModalContentIndex] = useState(7);

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

  function modalContent() {
    switch (modalContentIndex) {
      default:
        return <h1>Null</h1>;
    }
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
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        renderProps={modalContent}
      />
    </div>
  );
}

export default App;
