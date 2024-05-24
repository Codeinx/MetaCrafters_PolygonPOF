
// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;
 
import "erc721a/contracts/ERC721A.sol";

contract CrocsNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("Crocs", "CX") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmamaTmBK8omFgJX3DF91fowHwbbEwWJ7ZhFstXjaU12EG/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Crocs: generate different popular Crocs";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
