"use client";

// import Image from "next/image";
// import Link from "next/link";
import { CuratedContent } from "./grid/_components/CuratedContent";
import { ExploreContent } from "./grid/_components/ExploreContent";
import { PickCategories } from "./grid/_components/PickCategories";
import type { NextPage } from "next";

// import { useAccount } from "wagmi";

// import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <>
      <div>
        <PickCategories />
        <CuratedContent />
        <ExploreContent />
      </div>
    </>
  );
};

export default Home;
