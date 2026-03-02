# Tenderly Web3 Actions

<div align="center">
    <a href="https://tenderly.co">
        <img src="https://storage.googleapis.com/tenderly-public-assets/tenderly-logo-purple.png" alt="Tenderly" width="100%" height="auto" style="background-color: #ffffffb2; padding: 10px 20px; margin-bottom: 20px; box-sizing: border-box; max-width:200px;" />
    </a>
</div>

<div align="center">

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
**src
|--- actions 			# actions root directory, can be renamed
|--- |--- example.ts
|--- |--- package.json
|--- |--- tsconfig.json
|--- |--- node_modules
|         |--- @tenderly/actions
|         |--- typescript
|--- tenderly.yaml**

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
