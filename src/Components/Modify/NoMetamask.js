import React from "react";
import { Image } from "semantic-ui-react";
import Meta from "./Metamask.png";

const NoMetamask = () => {
  return (
    <div>
      <h2>
        <center>
          In order to modify CV smart contract please install MetaMask{" "}
        </center>
      </h2>
      <Image
        src={Meta}
        as="a"
        fluid
        href="https://metamask.io/"
        target="_blank"
      />
    </div>
  );
};

export default NoMetamask;
