module.exports = (data) => {
    const {name, amount} = data;
    const society = name.startsWith('society_') ? name : `society_${name}`;

    TriggerEvent('esx_addonaccount:getSharedAccount', society, function(account) {
        account.addMoney(amount);
    });

    return true;
}

