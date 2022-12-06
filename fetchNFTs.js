const apiKey = "wSD4319JoC2d7p0759CoDEJG4vn1bNxa";
const endpoint = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

// Takes in owner wallet address and contract address.
export const fetchNFTs = async (owner, contractAddress, setNFTs, retryAttempt) => {
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data =>
          data.json(),
        );
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json());
        setNFTs(data.ownedNfts);
        return data;
      }
    } catch (e) {
      console.log("NFT's not found");
      document.body.innerHTML = "NFT's not found";
      document.location.reload();
    }

    setNFTs(data.ownedNfts);
    return data;
  }
};
