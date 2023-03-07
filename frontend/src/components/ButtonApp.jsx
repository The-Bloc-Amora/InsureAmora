import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const ButtonApp = (props, { styles }) => {
  return (
    // <button
    //   type="button"
    //   className={`py-4 px-6
    // bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    // >
    //   Connect Wallet Test
    // </button>
    <ConnectWallet
      colorMode="light"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    />
  );
};

export default ButtonApp;
