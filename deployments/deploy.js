async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const Web3Bridge_NFT = await ethers.getContractFactory("Web3Bridge_NFT");
    const W3NFT = await Web3Bridge_NFT.deploy();
    console.log("Contract Deployed to Address:", W3NFT.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
