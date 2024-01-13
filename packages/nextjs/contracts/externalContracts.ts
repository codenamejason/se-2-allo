import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const externalContracts = {
  1: {
    ALLOPROXY: {
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      abi: [],
    },
    REGISTRY: {
      address: "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3",
      abi: [],
    },
    MICROGRANTSSTRATEGY: {
      address: "",
      abi: [],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
