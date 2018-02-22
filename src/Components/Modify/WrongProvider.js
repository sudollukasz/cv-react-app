import React from "react";

const WrongProvider = () => {
  console.log(window.web3.version.network);
  return (
    <h2>
      <center>
        Please change your web3 network to Ropsten and reload page
      </center>
    </h2>
  );
};

export default WrongProvider;
