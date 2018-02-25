pragma solidity ^0.4.18;

contract Issued {

	address public issuer;

	// Don't allow ether to be sent to user-issued token addresses
	function () public {
        revert();
	}

	function Issued() public {
		issuer = msg.sender;
	}
}
