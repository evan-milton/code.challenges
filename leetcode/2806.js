/**
 * @param {number} purchaseAmount
 * @return {number}
 */

// idea - get last digit, if its 1-4 round down, 5-9 round up
var accountBalanceAfterPurchase = function(purchaseAmount) {
    const lastDigit = purchaseAmount % 10;
    const rounded = lastDigit === 0 ? purchaseAmount 
                    : lastDigit > 4 ? purchaseAmount + (10 - lastDigit) 
                    : purchaseAmount - lastDigit;

    return 100 - rounded;
};2806