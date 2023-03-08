import React, { useState } from "react";
import { ethers } from "ethers";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Ethform() {
  const [price, setPrice] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [portfolioSize, setPortfolioSize] = useState("");
  const [value, setPremiumValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      `Numbers: ${price}, ${timeDuration}, ${portfolioSize}, ${value}`
    );
    setPrice("");
    setTimeDuration("");
    setPortfolioSize("");
    setPremiumValue(""); // Also clear the value here
    // setPremiumValue("");
  };

  const { contract } = useContract(
    "0x1E628de89FB46a3EdC7e2058867D3A805C13eE35"
  );
  const { mutateAsync: createPolicyAgreement, isLoading } = useContractWrite(
    contract,
    "createPolicyAgreement"
  );
  const { mutateAsync: claimSettlement } = useContractWrite(
    contract,
    "claimSettlement"
  );

  // const handleReset = () => {
  //   setPrice("");
  //   setTimeDuration("");
  //   setPortfolioSize("");
  // };

  const callCreatePolicy = async () => {
    try {
      const data = await createPolicyAgreement([
        price,
        timeDuration,
        portfolioSize,
        { value: ethers.utils.parseEther(value) },
      ]);
      console.info("contract call successs", data);
      toast.success("Congrats! You now hold a policy!");
    } catch (err) {
      console.error("contract call failure", err);
      toast.error("Transaction Failed!");
    }
  };

  const callClaimSettlement = async () => {
    try {
      const data = await claimSettlement();
      console.info("contract call successs", data);
      toast.success("Congrats! You have been indemnified!");
    } catch (err) {
      console.error("contract call failure", err);
      toast.error("Transaction Failed!");
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="max-w-[360px] mx-auto" onSubmit={handleSubmit}>
        <label className="block font-bold mb-2" htmlFor="num1">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            ETH Price:
          </h4>
          <input
            id="num1"
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            type="number"
            value={price}
            placeholder="add price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label className="block font-bold mb-2" htmlFor="num2">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Time Duration:
          </h4>
          <input
            id="num2"
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            type="number"
            value={timeDuration}
            placeholder="Insurance Duration"
            onChange={(e) => setTimeDuration(e.target.value)}
          />
        </label>
        <br />
        <label className="block font-bold mb-2" htmlFor="num3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Portfolio Size:
          </h4>
          <input
            id="num3"
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            type="number"
            value={portfolioSize}
            placeholder="Portfolio $Eth Value"
            onChange={(e) => setPortfolioSize(e.target.value)}
          />
        </label>
        <br />

        {/* PREMIUM VALUE */}
        <label className="block font-bold mb-2" htmlFor="num4">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            Premium Value:
          </h4>
          <input
            id="num4"
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            type="number"
            value={value}
            placeholder="Enter Premium"
            onChange={(e) => setPremiumValue(e.target.value)}
          />
        </label>
        {/* PREMIUM VALUE */}

        <br />
        <div className="flex flex-col mt-2">
          <button
            type="submit"
            className={`py-4 px-6
    bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px]`}
            onClick={callCreatePolicy}
          >
            Create Policy
          </button>
          <button
            type="button"
            onClick={callClaimSettlement}
            className={`py-4 px-6 mt-3
    bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px]`}
          >
            Claim Settlement
          </button>
        </div>
      </form>
    </>
  );
}

export default Ethform;
