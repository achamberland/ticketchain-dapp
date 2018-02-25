pragma solidity ^0.4.16;

contract IEventTokenFactory {
    
  event TokenCreated(address _sender, address tokenAddress);
    
  function createEventToken(string name, string description, string imageUrl, string postalAddress) public returns (address token);

}
