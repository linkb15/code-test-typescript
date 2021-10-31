// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

interface IERC20 {
    function balanceOf(address) external view returns (uint256);
}

contract Balances {
    struct Balance {
        address token;
        uint256 balance;
    }

    function getBalances(address account, address[] memory tokens)
        public
        view
        returns (Balance[] memory)
    {
        uint256 len = tokens.length;

        Balance[] memory returnDatas = new Balance[](len);

        for (uint256 i = 0; i < len; i++) {
            address token = tokens[i];
            if (token == address(0)) {
                returnDatas[i] = Balance({
                    token: token,
                    balance: account.balance
                });
            } else {
                returnDatas[i] = Balance({
                    token: token,
                    balance: IERC20(token).balanceOf(account)
                });
            }
        }

        return returnDatas;
    }
}
