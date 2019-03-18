// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    let coins = {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};
    
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency <= 0) {
        return result;
    } else {
        for (let value in coins) {
            if (coins[value] <= currency) {
                result[value] = Math.floor(currency/coins[value]);
                currency = currency % coins[value];
            }
        }
        return result;
    }
}
