import {Contracts} from "../src";
import {BigNumber, Utils, Wallet, Erc20} from "@ijstech/eth-wallet";
import Web3 from 'web3';
import * as Config from '../data/config';

let rpcUrl = Config.rpcUrl
let account = Config.deployer;

async function deploy() {
    let provider = new Web3.providers.HttpProvider(rpcUrl);
    let wallet = new Wallet(provider, account);
    for (let deploymentOptions of Config.deploymentOptionsArray) {
        let {timeIsMoneyOptions, rewardsOptions} = deploymentOptions;
        let timeIsMoney = new Contracts.TimeIsMoney(wallet);
        let timeIsMoneyToken = new Erc20(wallet, timeIsMoneyOptions.token);
        let timeIsMoneyTokenDecimals = await timeIsMoneyToken.decimals;
        let timeIsMoneyAddress = await timeIsMoney.deploy({
            token: timeIsMoneyOptions.token,
            maximumTotalLock: Utils.toDecimals(timeIsMoneyOptions.maximumTotalLock, timeIsMoneyTokenDecimals),
            minimumLockTime: timeIsMoneyOptions.minimumLockTime,
            startOfEntryPeriod: timeIsMoneyOptions.startOfEntryPeriod,
            endOfEntryPeriod: timeIsMoneyOptions.endOfEntryPeriod,
            perAddressCap: Utils.toDecimals(timeIsMoneyOptions.perAddressCap, timeIsMoneyTokenDecimals)
        });
        console.log('timeIsMoneyAddress', timeIsMoneyAddress);
        for (let rewardOptions of rewardsOptions) {
            let reward = new Contracts.Rewards(wallet);
            let rewardToken = new Erc20(wallet, rewardOptions.token);
            let rewardTokenDecimals = await rewardToken.decimals;
            let rewardAddress = await reward.deploy({
                timeIsMoney: timeIsMoneyAddress,
                token: rewardOptions.token,
                multiplier: Utils.toDecimals(rewardOptions.multiplier, rewardTokenDecimals),
                initialReward: Utils.toDecimals(rewardOptions.initialReward, 18),
                vestingPeriod: rewardOptions.vestingPeriod,
                claimDeadline: rewardOptions.claimDeadline,
                admin: rewardOptions.admin
            });
            console.log('rewardAddress', rewardAddress);
        }
    }
}
deploy();