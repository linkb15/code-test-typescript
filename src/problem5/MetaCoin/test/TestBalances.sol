pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Balances.sol";

contract TestBalances {
    Balances balances = Balances(DeployedAddresses.Balances());

    Balance[] expectedReturn = [
        Balance({token: 0x333737333, balance: 0}),
        Balance({token: 0x333737333, balance: 0})
    ];

    function testGetBalances() public {
        uint256 returnedDatas = balances.getBalances(
            0x333737333,
            [0x333737333, 0x333737333]
        );

        Assert.equal(
            expectedPetId,
            returnedDatas,
            "Adoption of the expected pet should match what is returned."
        );
    }
}
