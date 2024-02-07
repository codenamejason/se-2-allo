import { useState } from "react";
import { Allo, MicroGrantsStrategy } from "@allo-team/allo-v2-sdk";
import { Allocation, Status } from "@allo-team/allo-v2-sdk/dist/types";
import type { NextPage } from "next";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { base64Image, commonConfig } from "~~/config/common";
import { createPool } from "~~/sdk/allo";
import { allocate, createApplication } from "~~/sdk/microgrants";
import { createProfile } from "~~/sdk/registry";
import { TNewApplication } from "~~/types/types";

const Home: NextPage = () => {
  const [strategyAddress, setStrategyAddress] = useState("");

  const allo = new Allo({
    chain: commonConfig.chainId,
    rpc: commonConfig.rpc,
  });

  console.log(allo.address());

  const strategy = new MicroGrantsStrategy({
    chain: commonConfig.chainId,
    rpc: commonConfig.rpc,
    poolId: commonConfig.poolId,
  });

  allo.getStrategy(commonConfig.poolId).then(async addy => {
    setStrategyAddress(addy);
    strategy.setContract(addy as `0x${string}`);
    console.log(new Date(Number(await strategy.allocationEndTime())).toLocaleDateString());
  });

  const _newApplicationData: TNewApplication = {
    name: commonConfig.application.name,
    website: commonConfig.application.website,
    description: commonConfig.application.description,
    email: commonConfig.application.email,
    requestedAmount: BigInt(1e12),
    recipientAddress: commonConfig.recipientId,
    base64Image: base64Image,
    profileName: commonConfig.application.profileName,
    profileId: commonConfig.application.profileId,
  };

  const _allocationData: Allocation = {
    recipientId: commonConfig.recipientId,
    status: Status.Accepted,
  };

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2 ⛌ Allo</span>
          </h1>
          <p className="text-center text-lg">Allo Address: {allo.address()}</p>
          <p className="text-center text-lg">MicroGrantsStrategy Address: {strategyAddress ?? ""}</p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>Create a Profile</p>
              <button
                className="bg-gradient-to-r from-[#ff00a0] to-[#d75fab] text-white rounded-lg mx-2 px-4 py-2"
                onClick={() => {
                  createProfile();
                }}
              >
                Create Profile
              </button>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>Create a Pool</p>
              <button
                className="bg-gradient-to-r from-[#ff00a0] to-[#d75fab] text-white rounded-lg mx-2 px-4 py-2"
                onClick={() => {
                  createPool();
                }}
              >
                Create Pool
              </button>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>Register to a Pool</p>
              <button
                onClick={() => {
                  createApplication(_newApplicationData, commonConfig.chainId, commonConfig.poolId).then((res: any) => {
                    console.log("Recipient ID: ", res && res.recipientId);
                  });
                }}
                className="bg-gradient-to-r from-[#ff00a0] to-[#d75fab] text-white rounded-lg mx-2 px-4 py-2"
              >
                Apply to Pool
              </button>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>Allocate to a recipient</p>
              <button
                onClick={() => {
                  allocate(_allocationData).then(() => {
                    console.log("Allocated");
                  });
                }}
                className="bg-gradient-to-r from-[#ff00a0] to-[#d75fab] text-white rounded-lg mx-2 px-4 py-2"
              >
                Allocate to Pool
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
