"use client";

import { lazy, useEffect, useState } from "react";
import type { NextPage } from "next";
import { notification } from "~~/utils/scaffold-eth";
import { addToIPFS } from "~~/utils/simpleNFT/ipfs-fetch";
import nftsMetadata from "~~/utils/simpleNFT/nftsMetadata";

// import { NFTStorage } from "nft.storage";
// const APIKEY = '';

const LazyReactJson = lazy(() => import("react-json-view"));

const SimpleMint: NextPage = () => {
  const [yourJSON, setYourJSON] = useState<object>(nftsMetadata[0]);
  const [loading, setLoading] = useState(false);
  const [uploadedIpfsPath, setUploadedIpfsPath] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIpfsUpload = async () => {
    setLoading(true);
    // const nftStorage = new NFTStorage({ token: APIKEY, });
    const notificationId = notification.loading("Uploading to Filecoin...");
    //This was the code intentended to upload to FILECOIN network, but nft.store was decomissioned and no uploads are permited atm

    // const uploadedTonftStorage = await nftStorage.store(yourJSON);
    try {
      const uploadedItem = await addToIPFS(yourJSON);

      notification.remove(notificationId);
      notification.success("Uploaded to Filecoin");

      setUploadedIpfsPath(uploadedItem.path);
    } catch (error) {
      notification.remove(notificationId);
      notification.error("Error uploading to Filecoin");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <h1 className="text-center mb-4">
          <span className="block text-4xl font-bold">PolyMint</span>
        </h1>
        <p className="text-center mb-2 px-20">
          PolyMint is the way for artist to upload their art without needing to pay for minting or transactions,
          enabling collectors to pay for the first mint of a collection. By leveraging PolyMint we aim to make artists
          access tokenizing their art without friction.
        </p>
        <p className="text-center mb-2 px-20">
          The first minter of a collection, who pays for cost of the deployment of the NFT contract, gets a share of the
          royalties of all the NFTs minted in that collection. This creates a market for art investors being eager to
          first mint a piece of art they like.
        </p>
        <p className="text-center mb-2 px-20">
          The cost of the deployment consists in the gas cost of the deployment transaction, and a custom optional USDC
          commision set by the artist that gets distributed 90% for the artist and 10% for the marketplace.
        </p>

        <p className="text-center mb-2">Press the edit button on each attribute of the collection you want to change</p>

        {mounted && (
          <LazyReactJson
            style={{ padding: "1rem", borderRadius: "0.75rem" }}
            src={yourJSON}
            theme="solarized"
            enableClipboard={false}
            onEdit={edit => {
              setYourJSON(edit.updated_src);
            }}
            onAdd={add => {
              setYourJSON(add.updated_src);
            }}
            onDelete={del => {
              setYourJSON(del.updated_src);
            }}
          />
        )}
        <button
          className={`btn btn-secondary mt-4 ${loading ? "loading" : ""}`}
          disabled={loading}
          onClick={handleIpfsUpload}
        >
          Upload metadata to Filecoin
        </button>
        <button
          className={`btn btn-secondary mt-4 ${loading ? "loading" : ""}`}
          disabled={loading}
          onClick={handleIpfsUpload}
        >
          Sign metadata (gas free)
        </button>
        {uploadedIpfsPath && (
          <div className="mt-4">
            <a href={`https://ipfs.io/ipfs/${uploadedIpfsPath}`} target="_blank" rel="noreferrer">
              {`https://ipfs.io/ipfs/${uploadedIpfsPath}`}
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default SimpleMint;
