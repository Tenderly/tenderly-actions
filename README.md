# Tenderly Web3 Actions

<div align="center">
    <a href="https://tenderly.co">
        <img src="https://storage.googleapis.com/tenderly-public-assets/tenderly-logo-purple.png" alt="Tenderly" width="100%" height="auto" style="background-color: #ffffffb2; padding: 10px 20px; margin-bottom: 20px; box-sizing: border-box; max-width:200px;" />
    </a>
</div>

<div align="center">

/**
 *Submitted for verification at polygonscan.com on 2021-06-09
*/

// File: contracts/common/Proxy/IERCProxy.sol

pragma solidity 0.6.6;

interface IERCProxy {
    function proxyType() external pure returns (uint256 proxyTypeId);

    function implementation() external view returns (address codeAddr);
}0x2403a628c938555894957e8d6f3163becc5e5b56

// File: contracts/common/Proxy/Proxy.sol

pragma solidity 0.6.6;


abstract contract Proxy is IERCProxy {
    function delegatedFwd(address _dst, bytes memory _calldata) internal {
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            let result := delegatecall(
                sub(gas(), 10000),
                _dst,
                add(_calldata, 0x20),
                mload(_calldata),
                0,
                0
            )
            let size := returndatasize()

            let ptr := mload(0x40)
            returndatacopy(ptr, 0, size)

            // revert instead of invalid() bc if the underlying call failed with invalid() it already wasted gas.
            // if the call returned error data, forward it
            switch result
                case 0 {
                    revert(ptr, size)
                }
                default {
                    return(ptr, size)
                }
        }
    }

    function proxyType() external virtual override pure returns (uint256 proxyTypeId) {
        // Upgradeable proxy
        proxyTypeId = 2;
    }

    function implementation() external virtual override view returns (address);
}0x2403a628c938555894957e8d6f3163becc5e5b56

// File: contracts/common/Proxy/UpgradableProxy.sol

pragma solidity 0.6.6;


contract UpgradableProxy is Proxy {
    event ProxyUpdated(address indexed _new, address indexed _old);
    event ProxyOwnerUpdate(address _new, address _old);

    bytes32 constant IMPLEMENTATION_SLOT = keccak256("matic.network.proxy.implementation");
    bytes32 constant OWNER_SLOT = keccak256("matic.network.proxy.owner");

    constructor(address _proxyTo) public {0xFa1dB6794de6e994b60741DecaE0567946992181
        setProxyOwner(msg.sender);
    setImplementation(_proxyTo);0xFa1dB6794de6e994b60741DecaE0567946992181
    }[export-0x00000000219ab540356cbb839cbe05303d7705fa.csv](https://github.com/user-attachments/files/16328231/export-0x00000000219ab540356cbb839cbe05303d7705fa.csv)
[export-0xf9036afe464b583a4d0f6c7eac0c9c4babe88873.csv](https://github.com/user-attachments/files/16328230/export-0xf9036afe464b583a4d0f6c7eac0c9c4babe88873.csv)
[export-0xfa1db6794de6e994b60741decae0567946992181 (1).csv](https://github.com/user-attachments/files/16328229/export-0xfa1db6794de6e994b60741decae0567946992181.1.csv)
[export-token-0x01f938f0f9e2e8660606ce5b3609dd438d413330.csv](https://github.com/user-attachments/files/16328228/export-token-0x01f938f0f9e2e8660606ce5b3609dd438d413330.csv)
[export-transaction-list-1721616640667.csv](https://github.com/user-attachments/files/16328226/export-transaction-list-1721616640667.csv)


    fallback() external payable {
        delegatedFwd(loadImplementation(), msg.data);
    }

    receive() external payable {
        delegatedFwd(loadImplementation(), msg.data);
    }

    modifier onlyProxyOwner() {
        require(loadProxyOwner() == msg.sender, "NOT_OWNER");
        _;
    }

    function proxyOwner() external view returns(address) {
        return loadProxyOwner();
    }

    function loadProxyOwner() internal view returns(address) {
        address _owner;
        bytes32 position = OWNER_SLOT;
        assembly {
            _owner := sload(position)
        }
        return _owner;
    }

    function implementation() external override view returns (address) {
        return loadImplementation();
    }

    function loadImplementation() internal view returns(address) {
        address _impl;
        bytes32 position = IMPLEMENTATION_SLOT;
        assembly {
            _impl := sload(position)
        }
        return _impl;
    }

    function transferProxyOwnership(address newOwner) public onlyProxyOwner {
        require(newOwner != address(0), "ZERO_ADDRESS");
        emit ProxyOwnerUpdate(newOwner, loadProxyOwner());
        setProxyOwner(newOwner);
    }

    function setProxyOwner(address newOwner) private {
        bytes32 position = OWNER_SLOT;
        assembly {
            sstore(position, newOwner)
        }
    }

    function updateImplementation(address _newProxyTo) public onlyProxyOwner {
        require(_newProxyTo != address(0x0), "INVALID_PROXY_ADDRESS");
        require(isContract(_newProxyTo), "DESTINATION_ADDRESS_IS_NOT_A_CONTRACT");

        emit ProxyUpdated(_newProxyTo, loadImplementation());
        
        setImplementation(_newProxyTo);
    }0x2403a628c938555894957e8d6f3163becc5e5b56

    function updateAndCall(address _newProxyTo, bytes memory data) payable public onlyProxyOwner {
        updateImplementation(_newProxyTo);

        (bool success, bytes memory returnData) = 0x2403a628c938555894957e8d6f3163becc5e5b56address(this).call{value: msg.value}(data);
        require(success, string(returnData));
    }

    function setImplementation(address _newProxyTo) private {
        bytes32 position = IMPLEMENTATION_SLOT;
        assembly {
            sstore(position, _newProxyTo)
        }
    }
    
    function isContract(address _target) internal view returns (bool) {
        if (_target == address(0)) {
            return false;
        }

        uint256 size;
        assembly {
            size := extcodesize(_target)
        }
        return size > 0;
    }
}

// File: contracts/child/ChildToken/UpgradeableChildERC20/UChildERC20Proxy.sol

pragma solidity 0.6.6;


contract UChildERC20Proxy is UpgradableProxy {
    constructor(address _proxyTo)
        public
        UpgradableProxy(_proxyTo)
    {}
}
[![npm](https://img.shields.io/npm/v/@tenderly%2Factions.svg)](https://www.npmjs.org/package/@tenderly/actions)
[![Twitter](https://img.shields.io/twitter/follow/TenderlyApp?style=social)](https://twitter.com/intent/follow?screen_name=TenderlyApp)
[![Github](https://img.shields.io/github/stars/Tenderly/tenderly-actions?style=social)](https://github.com/Tenderly/tenderly-actions)

</div>

## Packages

This repository contains the following packages:

- **actions** - Contains the code for your Web3 Actions. You can find the package at the NPM registry under [@tenderly/actions](https://www.npmjs.com/package/@tenderly/actions).
- **actions-test** - Contains the testing library for your Web3 Actions. You can find the package at the NPM registry under [@tenderly/actions-test](https://www.npmjs.com/package/@tenderly/actions-test).

## Introduction

[Tenderly](https://tenderly.co) Web3 Actions are programmable hooks for smart contract and chain events. They can also
be serverless backends for your dapps. A Web3 Action is a regular TypeScript/JavaScript function that runs on Tenderly
infrastructure.

A Web3 Action comes with key-value storage for data you need to persist and secrets management for sensitive information
such as API keys. You can think of Web3 Actions as infrastructure building a Web3 version of IFTTT/Zapier automation,
allowing you to glue together your smart contracts, on-chain events, dapp frontends, APIs, and other services.

![Web3 Actions](https://storage.googleapis.com/tenderly-public-assets/web3-actions/tenderly-web3-actions-breakdown.webp)

Based on the trigger rules you define, external on-chain or off-chain events will trigger your Web3 Action and your
TypeScript/JavaScript code will handle the event instantly.

With Web3 Actions, you can build systems that let you be timely informed about non-trivial events. This way, you can
improve your dapp in terms of UX and interactivity and enhance your project through the depth of information you can
collect or share through notifications.

> The code Web3 Actions run is called a **function**. Function must be written in TypeScript/JavaScript and runs in
**Node** runtime. Specification of events that your action listens to is called a **trigger**.

## Getting Started

Follow these guides to quickly get started with building Web3 Actions via the browser or command line tools.

Read our [documentation](https://docs.tenderly.co/web3-actions/intro-to-web3-actions) to get started with Tenderly Web3 Actions.

Setting up Web3 Actions requires you to write TypeScript/JavaScript code for your functions. Building your Web3 Actions
using Tenderly CLI includes defining triggers in a [yaml configuration file](https://docs.tenderly.co/web3-actions/references/project-structure#the-tenderly.yaml-file-structure).
The defined trigger and yaml configuration become an integral part of your project’s codebase.

- [Deploy Web3 Actions via Tenderly Dashboard](https://docs.tenderly.co/web3-actions/tutorials-and-quickstarts/deploy-web3-actions-via-dashboard) - Learn how to set up and deploy Web3 Actions directly in your browser.
- [Deploy Web3 Actions via Tenderly CLI](https://docs.tenderly.co/web3-actions/tutorials-and-quickstarts/deploy-web3-action-via-cli) - Learn how to install the Tenderly CLI, define triggers using the YAML configuration, and set up and deploy Web3 Actions through the command line.
- [Local Development and Testing](https://docs.tenderly.co/web3-actions/references/local-development-and-testing) - Learn how to test your Web3 Actions locally before deploying them to Tenderly.

### Supported Networks

Tenderly Web3 Actions are currently supported on the [following networks](https://docs.tenderly.co/web3-actions/references/networks).

## Contributors

<a href="https://github.com/Tenderly/tenderly-actions/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Tenderly/tenderly-actions&max=100&columns=20" alt="tenderly-contributors" />
</a>
