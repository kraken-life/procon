module.exports = (data) => {
    const {name, amount} = data;
    const society = name.startsWith('society_') ? name : `society_${name}`;

    return new Promise((resolve) => {
        TriggerEvent('esx_addonaccount:getSharedAccount', society, function (account) {
            if (account.money >= amount) {
                account.removeMoney(amount);
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

