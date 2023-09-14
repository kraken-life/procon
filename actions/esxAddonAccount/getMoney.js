module.exports = (data) => {
    const {name} = data;
    const society = name.startsWith('society_') ? name : `society_${name}`;

    return new Promise((resolve) => {
        TriggerEvent('esx_addonaccount:getSharedAccount', society, function (account) {
            resolve(account.money);
        });
    });
}

