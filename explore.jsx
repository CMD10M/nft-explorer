import { useState } from 'react';
import NftCard from '../components/nftcard';
import {fetchNFTs} from '../helpers/fetchNFTs';

const Explore = () => {

    const [owner, setOwner] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [NFTs, setNFTs] = useState("")
    

    return (
        <div>
            <header class='header'>
                <div>
                </div>
                <div>
                    <div>
                        <h1 >
                            NFT Explorer
                        </h1>
                        <p > An explorer to find NFTs by owner and contract address </p>
                    </div>
                    <div class="div6">
                        <input class="div7" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input class="div7" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
                    </div>
                    <div>
                    <button class= "glow-on-hover" onClick= {() => {fetchNFTs(owner, contractAddress, setNFTs)}}>Search </button>
                    </div>
                </div>
            </header>
            
            <section>
                {
                    NFTs ? NFTs.map(NFT => {
                       
                        return (
                           <NftCard image={NFT.media[0].gateway} id={NFT.id.tokenId } title={NFT.title} address={NFT.contract.address} description={NFT.description} attributes={NFT.metadata.attributes} ></NftCard>
                        )
                    }) : <div></div>
                }
            </section>
        </div>
    )
}


export default Explore