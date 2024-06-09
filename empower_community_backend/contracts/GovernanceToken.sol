// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/draft-ERC721Votes.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GovernanceToken is ERC721A, Ownable, EIP712, Votes {
  using Counters for Counters.Counter;

  Counters.Counter private _tokenIdCounter;

  string _baseTokenURI = "";

  constructor(
    string memory _tokenName,
    string memory _tokenSymbol,
    string memory _daoName
  ) ERC721A(_tokenName, _tokenSymbol) EIP712(_daoName, "1") {}

  function setBaseURI(string memory _newBaseURI) external onlyOwner {
    _baseTokenURI = _newBaseURI;
  }

  function tokenURI(uint256 tokenId) public view virtual override(ERC721A) returns (string memory) {
    require(_exists(tokenId), "Token ID Doesn't exists");

    return _baseTokenURI;
  }

  function safeMint(address to, uint256 quantity) external {
    _mint(to, quantity);
  }

  function mintWithURI(
    address _to,
    uint256 quantity,
    string memory _tokenURI
  ) external onlyOwner {
    _mint(_to, quantity);
    _baseTokenURI = _tokenURI;
  }

  function _getVotingUnits(address account) internal view virtual override returns (uint256) {
    return balanceOf(account);
  }

  function _increaseBalance(address account, uint128 amount) internal virtual {
    // super._increaseBalance(account, amount);
    _transferVotingUnits(address(0), account, amount);
  }
}
