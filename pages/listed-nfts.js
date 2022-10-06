import { useState, useEffect, useContext } from 'react';

import { NFTContext } from '../context/NFTContext';
import { NFTCard, Loader } from '../components';

const ListedNFTs = () => {
  const { fetchMyNFTsOrListedNFTs } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const targetNetworkId = '0x5';

  useEffect(() => {
    fetchMyNFTsOrListedNFTs('fetchItemsListed')
      .then((items) => {
        setNfts(items);
        setIsLoading(false);
      });
  }, []);
  
      const checkNetwork = async () => {
      const currentChainId = await window.ethereum.request({
          method: 'eth_chainId',
        });
        if (currentChainId == targetNetworkId) {
          loadPosts();
          console.log(currentChainId)
        } else {
          window.alert("No Ethereum connection: Wrong network, connect to Goerli Testnet")
          console.log(currentChainId);
        }
    };

    useEffect(() => {
      if (window.ethereum) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
      }
    });

    useEffect(() => {
      checkNetwork();
    });
  
  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!isLoading && nfts.length === 0) {
    return (
      <div className="flexCenter sm:p-4 p-16 min-h-screen">
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-3xl font-extrabold">No NFTs Listed For Sale</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center sm:px-4 p-12 min-h-screen">
      <div className="w-full minmd:w-4/5">
        <div className="mt-4">
          <h2 className="font-poppins dark:text-white text-nft-black-1 text-2xl font-semibold mt-2 ml-4 sm:ml-2">NFTs Listed For Sale</h2>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {nfts.map((nft) => <NFTCard key={nft.tokenId} nft={nft} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedNFTs;
