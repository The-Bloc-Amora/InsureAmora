import React, { useState } from "react";
import { utils } from "ethers";
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";

function NftAssetform() {
  const [nftContractAddress, setNFTContractaddress] = useState('');
  const [NFTTokenId, setNFTTokenId] = useState('');
  const [isEligible, setIsEligible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [amount, setAmount] = useState("0");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`NFTContractAddress: ${nftContractAddress}`);
    console.log(`NFT Token ID: ${NFTTokenId}`);
  };

  const handleInsure = (event) => {
    event.preventDefault();
    console.log(`NFTContractAddress: ${nftContractAddress}`);
    console.log(`NFT Token ID: ${NFTTokenId}`);
    console.log(`NFT TimeDuration : ${duration}`);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    console.log(duration);
  }

  const { contract } = useContract(
    "0x83E6E9092a301B08B7A2697ABa13B2cABA89D4a9"
  );

  const { mutateAsync: checkEligibility, } = useContractWrite(
    contract,
    "checkEligibility"
  );

  const { mutateAsync: getPremium, } = useContractWrite(
    contract,
    "getInsuredAmount"
  );

  const { data: premiumAmount,} = useContractRead(
    contract,
    "insureAmount_"
  );


  const { mutateAsync: insureNFT, } = useContractWrite(
    contract,
    "insureNFT"
  );

  const callcheckEligibility = async () => {
    try {
      const data = await checkEligibility([
        nftContractAddress,
        NFTTokenId,
      ]);
      console.info("contract call successs", data);
      setIsEligible(true);
      console.log(`Eligible? : ${isEligible}`);

    } catch (err) {
      console.error("contract call failure", err);
      setIsEligible(false);
      console.log(`Eligible? : ${isEligible}`);
    }
  };

  const callGetPremium = async () => {
    try {
      const premium = await getPremium([
        duration,
      ]);
      console.info("contract call successs", premium);
      console.log("Premium Amount: ", premiumAmount);
      setAmount(utils.formatEther(premiumAmount.toString()));
      console.log("Premium Amount: ", amount);

    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const callinsureNFT = async () => {
    try {
      const data = await insureNFT([
        nftContractAddress,
        NFTTokenId,
        duration,
      ]);
      console.info("contract call successs", data);

    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <>
      {isEligible ?
        <form className="max-w-[360px] mx-auto" onSubmit={handleInsure}>
          <label className="block font-bold mb-2" htmlFor="nftContractAddress">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              Contract Address: {nftContractAddress}
            </h4>
          </label>

          <br />

          <label className="block font-bold mb-2" htmlFor="NFTTokenId">
            {' '}
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              Token ID: {NFTTokenId}
            </h4>
          </label>

          <br />

          <label className="block font-bold mb-2" htmlFor="Duration">
            {' '}
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              Time Duration:
            </h4>
          </label>
          <select
            defaultValue={duration}
            onChange={handleDurationChange}
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            id="Duration"
            name="Duration"
            placeholder="Choose the time duration"
          >
            <option value={0}> Three Months </option>
            <option value={1}> Six Months </option>
            <option value={2}> One Year </option>
          </select>
          
          <br />
          <br />

          <button
            type="submit"
            onClick={callGetPremium}
            className={`py-4 px-6
              bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px]`}
          >
            Get Premium
          </button>

          <br />
          <br />

          <div className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            {amount == 0 ? "" : `Premium: ${amount} Eth`}
          </div>
          

          <br />
          <br />

          <button
            type="submit"
            onClick={callinsureNFT}
            className={`py-4 px-6
              bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px]`}
          >
            Insure
          </button>

        </form>
        :
        <form className="max-w-[360px] mx-auto" onSubmit={handleSubmit}>
          <label className="block font-bold mb-2" htmlFor="nftContractAddress">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              Contract Address:
            </h4>
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            id="nftContractAddress"
            name="nftContractAddress"
            placeholder="paste contract address"
            value={nftContractAddress}
            onChange={(e) => setNFTContractaddress(e.target.value)}
          />
          <br />
          <br />

          <label className="block font-bold mb-2" htmlFor="NFTTokenId">
            {' '}
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              Token ID:
            </h4>
          </label>
          <input
            type="text"
            className="form-input mt-1 block w-full text-3xl font-bold bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md"
            id="NFTTokenId"
            name="NFTTokenId"
            placeholder="enter your tokenId"
            value={NFTTokenId}
            onChange={(e) => setNFTTokenId(e.target.value)}
          />
          <br />
          <br />

          <button
            type="submit"
            onClick={callcheckEligibility}
            className={`py-4 px-6
              bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px]`}
          >
            Check Eligibility
          </button>

          <br />
          <br />

          {/* <div className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            <p> Elegibility Status: </p> {isEligible}
          </div> */}
        </form>
      }
      

    </>
    
  );
}

export default NftAssetform;
