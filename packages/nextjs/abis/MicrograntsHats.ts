import { ContractAbi } from "~~/types/abitype/abis";

export const MicroGrantsHatsABI: ContractAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_allo",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ALLOCATION_ACTIVE",
    type: "error",
  },
  {
    inputs: [],
    name: "ALLOCATION_NOT_ACTIVE",
    type: "error",
  },
  {
    inputs: [],
    name: "ALLOCATION_NOT_ENDED",
    type: "error",
  },
  {
    inputs: [],
    name: "ALREADY_INITIALIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "AMOUNT_MISMATCH",
    type: "error",
  },
  {
    inputs: [],
    name: "AMOUNT_TOO_LOW",
    type: "error",
  },
  {
    inputs: [],
    name: "ANCHOR_ERROR",
    type: "error",
  },
  {
    inputs: [],
    name: "ARRAY_MISMATCH",
    type: "error",
  },
  {
    inputs: [],
    name: "EXCEEDING_MAX_AMOUNT",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_ADDRESS",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_FEE",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_METADATA",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_REGISTRATION",
    type: "error",
  },
  {
    inputs: [],
    name: "IS_APPROVED_STRATEGY",
    type: "error",
  },
  {
    inputs: [],
    name: "MISMATCH",
    type: "error",
  },
  {
    inputs: [],
    name: "NONCE_NOT_AVAILABLE",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_APPROVED_STRATEGY",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_ENOUGH_FUNDS",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_IMPLEMENTED",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_INITIALIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_PENDING_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "POOL_ACTIVE",
    type: "error",
  },
  {
    inputs: [],
    name: "POOL_INACTIVE",
    type: "error",
  },
  {
    inputs: [],
    name: "RECIPIENT_ALREADY_ACCEPTED",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
    ],
    name: "RECIPIENT_ERROR",
    type: "error",
  },
  {
    inputs: [],
    name: "RECIPIENT_NOT_ACCEPTED",
    type: "error",
  },
  {
    inputs: [],
    name: "REGISTRATION_NOT_ACTIVE",
    type: "error",
  },
  {
    inputs: [],
    name: "UNAUTHORIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "ZERO_ADDRESS",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IStrategy.Status",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Allocated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Allocated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "approvalThreshold",
        type: "uint256",
      },
    ],
    name: "ApprovalThresholdUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Distributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRequestedAmount",
        type: "uint256",
      },
    ],
    name: "MaxRequestedAmountIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "PoolActive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "allocationStartTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "allocationEndTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "TimestampsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "UpdatedRegistration",
    type: "event",
  },
  {
    inputs: [],
    name: "HATS_PROTOCOL",
    outputs: [
      {
        internalType: "contract IHats",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NATIVE",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "allocate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allocated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allocationEndTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allocationStartTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approvalThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_recipientIds",
        type: "address[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllo",
    outputs: [
      {
        internalType: "contract IAllo",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_recipientIds",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "_data",
        type: "bytes[]",
      },
    ],
    name: "getPayouts",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "recipientAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IStrategy.PayoutSummary[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
    ],
    name: "getRecipient",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "useRegistryAnchor",
            type: "bool",
          },
          {
            internalType: "address",
            name: "recipientAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "requestedAmount",
            type: "uint256",
          },
          {
            internalType: "enum IStrategy.Status",
            name: "recipientStatus",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "protocol",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "pointer",
                type: "string",
              },
            ],
            internalType: "struct Metadata",
            name: "metadata",
            type: "tuple",
          },
        ],
        internalType: "struct MicroGrantsBaseStrategy.Recipient",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipientId",
        type: "address",
      },
    ],
    name: "getRecipientStatus",
    outputs: [
      {
        internalType: "enum IStrategy.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStrategyId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hatId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxRequestedAmount",
        type: "uint256",
      },
    ],
    name: "increaseMaxRequestedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increasePoolAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isPoolActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_allocator",
        type: "address",
      },
    ],
    name: "isValidAllocator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRequestedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum IStrategy.Status",
        name: "",
        type: "uint8",
      },
    ],
    name: "recipientAllocations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "registerRecipient",
    outputs: [
      {
        internalType: "address",
        name: "recipientId",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_approvalThreshold",
        type: "uint256",
      },
    ],
    name: "setApprovalThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_allocationStartTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_allocationEndTime",
        type: "uint64",
      },
    ],
    name: "updatePoolTimestamps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "useRegistryAnchor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
