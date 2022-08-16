module.exports = {
    rpcUrl: '',
    deployer: {
        address: '',
        privateKey: ''
    },
    deploymentOptionsArray: [
        {
            timeIsMoneyOptions: {
                token: '',
                maximumTotalLock: 0,
                minimumLockTime: 0,
                startOfEntryPeriod: 0,
                endOfEntryPeriod: 0,
                perAddressCap: 0
            },
            rewardsOptions: [{
                token: '',
                multiplier: 0,
                initialReward: 0,
                vestingPeriod: 0,
                claimDeadline: 0,
                admin: ''
            }]
        }
    ]
}