import { showConnect } from "@stacks/connect";
import {
  makeContractCall,
  uintCV,
  standardPrincipalCV,
} from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

document.getElementById("connect").onclick = () => {
  showConnect({
    appDetails: {
      name: "Stacks Counter DApp",
      icon: window.location.origin + "/logo.png",
    },
  });
};

document.getElementById("increment").onclick = async () => {
  alert("Next step: wire real contract call after deploy");
};
    
