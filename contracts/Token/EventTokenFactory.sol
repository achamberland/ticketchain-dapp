pragma solidity ^0.4.16;

import "./IEventTokenFactory.sol";
import "./EventToken.sol";

contract EventTokenFactory is IEventTokenFactory {

	mapping(address => EventToken[]) issedTokens;

	function EventTokenFactory() public {
	}

	// Issue a new EventToken by the current user
	// @return address of the newly created token
	function createEventToken(string name, string description, string imageUrl, string postalAddress) public returns (address token) {
		EventToken tokenContract = new EventToken(name, description, imageUrl, postalAddress);
		token = address(tokenContract);
		issuedTokens[msg.sender].push(tokenContract);
		TokenCreated(msg.sender, token);
	}

	// @return list of all tokens issued by user
	function getIssuedTokens() public view returns (EventToken[]) {
		return issuedTokens[msg.sender];
	}
}
