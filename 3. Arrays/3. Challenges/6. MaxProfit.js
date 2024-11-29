// Solution 1
// function findMaxProfit(prices) {
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const currentProfit = prices[j] - prices[i];

//             if (maxProfit < currentProfit) {
//                 maxProfit = currentProfit;
//             }
//         }
//     }

//     return maxProfit;
// }

// Solution 2
function findMaxProfit(prices) {
    let minPrice = prices[0]; // Assume the first day is the cheapest to buy
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        minPrice = Math.min(minPrice, currentPrice);

        const potentialValue = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialValue);
    }

    return maxProfit;
}

console.log("Max profit for [7,1,5,3,6,4] is:", findMaxProfit([7, 1, 5, 3, 6, 4]));