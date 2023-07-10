import { ethers } from "hardhat";

export const Deployer = {
	ERC721Simple: async () => {
		const MockToken = await ethers.getContractFactory("ERC721Simple");
		const mocktoken = await MockToken.deploy("https://www.forbes.com/advisor/in/investing/cryptocurrency/what-is-an-nft-how-do-nfts-work/");
		await mocktoken.deployed();
		console.log(`ERC721_NFT_CONTRACT_ADDRESS=${mocktoken.address}`);
		return mocktoken;
	},
};
