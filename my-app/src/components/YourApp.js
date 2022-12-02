import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContract } from 'wagmi';
import '../App.css';

// import { GearFill } from 'react-bootstrap-icons';
// import BeatLoader from "react-spinners/BeatLoader";


export default function YourApp() {
  const [inputAmount, setInputAmount] = useState(undefined);
  const [outputAmount, setOutputAmount] = useState(undefined);
  const [transaction, setTransaction] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const [ratio, setRatio] = useState(undefined);



    const contractABI = [
        {
          "inputs": [
            {
              "internalType": "contract ISwapRouter",
              "name": "_swapRouter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "DAI",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "WETH9",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "feeTier",
          "outputs": [
            {
              "internalType": "uint24",
              "name": "",
              "type": "uint24"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "swapRouter",
          "outputs": [
            {
              "internalType": "contract ISwapRouter",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            }
          ],
          "name": "swapWETHForDAI",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
    const contractAddress = '0x864453DdFe36c8E2732dE73458E97c24B452d762';
    const mainContract = useContract({
        address: contractAddress,
        abi: contractABI,
    });


    useEffect(() => {

        console.log(mainContract)
        console.log(mainContract)
    },[mainContract])


    // const getSwapPrice = (inputAmount) => {
    //     setInputAmount(inputAmount)
    
    //     const swap = getPrice(
    //       inputAmount,
    //       slippageAmount,
    //       Math.floor(Date.now()/1000 + (deadlineMinutes * 60)),
    //       signerAddress
    //     ).then(data => {
    //       setTransaction(data[0])
    //       setOutputAmount(data[1])
    //       setRatio(data[2])
    //       setLoading(false)
    //     })
    // }

  return (
    <div className="swapMain">
      <div className="appNav">
        {/* <img src={logo} className="afroSwap" alt="AfroSwap logo"/> */}
        <div className="my-2 buttonContainer buttonContainerTop">
          Swap
        </div>

        <div className="rightNav">
          <div className="connectButtonContainer">
            <ConnectButton/>
          </div>
        </div>
      </div>

      {/* <div className="appBody">
        <div className="swapContainer">
          <div className="swapHeader">
            <span className="swapText">Swap</span>
            <span className="gearContainer" onClick={() => setShowModal(true)}>
              <GearFill />
            </span>
            {showModal && (
              <ConfigModal
                onClose={() => setShowModal(false)}
                setDeadlineMinutes={setDeadlineMinutes}
                deadlineMinutes={deadlineMinutes}
                setSlippageAmount={setSlippageAmount}
                slippageAmount={slippageAmount} />
            )}
          </div>

          <div className="swapBody">
            <CurrencyField
              field="input"
              tokenName="WETH"
              getSwapPrice={getSwapPrice}
              signer={signer}
              balance={wethAmount} />
            <CurrencyField
              field="output"
              tokenName="UNI"
              value={outputAmount}
              signer={signer}
              balance={uniAmount}
              spinner={BeatLoader}
              loading={loading} />
          </div>

          <div className="ratioContainer">
            {ratio && (
              <>
                {`1 UNI = ${ratio} WETH`}
              </>
            )}
          </div>

          <div className="swapButtonContainer">
            {isConnected() ? (
              <div
                onClick={() => runSwap(transaction, signer)}
                className="swapButton"
              >
                Swap
              </div>
            ) : (
              <div
                onClick={() => getSigner(provider)}
                className="swapButton"
              >
                <ConnectButton />
              </div>
            )}
          </div>

        </div>
      </div> */}

    </div>
  );
}

