const NftCard = ({ image, id, title, address, description, attributes}) => {
    return (
            <div class ="card">
                <img class="card_product_img" key={id} src={image}></img>
                <div class="card_body">
                    <div style={{padding: '12px'}}>
                        <div class="div1">
                            <div class="div2">
                                <h3 class="card_title">{title}</h3>
                            </div>
                            <div class="div1">
                                <a href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a>
                            </div>                        
                        </div>
                        <p>{description? description.slice(0, 200) : "No Description"}</p>
                    </div>
                    <div class="attributes">
                {attributes?.length > 0 && attributes.map(attribute => {
                    return (
                        <div class="div3">
                            <p class="div4">{attribute.trait_type}:</p>
                            <p class="div5">{attribute.value}</p>
                        </div>
                    )
                })}
                    </div>
                </div>
            </div>
    )
    }

export default NftCard