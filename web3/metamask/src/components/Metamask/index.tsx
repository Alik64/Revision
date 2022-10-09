import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
// import { useDispatch } from "react-redux";
// import { getNftByMetamaskWallet } from "../../store/nftsSlice";

import logo from "./images/logo.png";

import "./Metamask.scss";

const Metamask: React.FC = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
  const [accountBalance, setAccountBalance] = useState<string | null>(null);

  const { ethereum } = window;
  console.dir(ethereum.selectedAddress);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  const connectMetamaskWallet = async () => {
    try {
      if (!ethereum) {
        setIsMetamaskInstalled(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setEthereumAccount(accounts[0]);
      setAccountBalance(bal);

      // dispatch(getNftByMetamaskWallet(accounts[0]));
    } catch (error) {
      console.log(error);
    }
  };

  // const watchMyNftHandler: () => void = () => {
  //   dispatch(getNftByMetamaskWallet(ethereumAccount));
  // };

  return (
    <div className="metamaskRoot">
      {ethereumAccount === null ? (
        <div className="buttonContainer">
          {isMetamaskInstalled ? (
            <button onClick={connectMetamaskWallet}>
              <img src={logo} alt="metamask brand logo" className="metaBtn" />
              <span>Connect with MetaMask</span>
            </button>
          ) : (
            <p>Install Your Metamask wallet</p>
          )}
        </div>
      ) : (
        <div className="infoContainer">
          <p>
            <strong>ETH wallet connected as:</strong> {ethereumAccount}
          </p>
          <p>My balance: {accountBalance} ETH</p>
          <button
            // onClick={watchMyNftHandler}
            title="Watch my NFTs"
          >
            My NFTs
          </button>
        </div>
      )}
    </div>
  );
};

export default Metamask;
