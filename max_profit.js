const propertyEarning = {
    "Theatre": 1500,
    "Pub": 1000,
    "Commercial Park": 3000
};

const buildTimes = {
    "Theatre": 5,
    "Pub": 4,
    "Commercial Park": 10
};

let maxProfit = [];

function max_profit(n, totalEarning, propertyCreated) {
    if (n === 0) {
        maxProfit.push(totalEarning);
        return;
    }

    for (const [name, earning] of Object.entries(propertyEarning)) {
        if (buildTimes[name] <= n) {
            const remainingTime = n - buildTimes[name];
            const newPropertyCreated = { ...propertyCreated };
            newPropertyCreated[name] += 1;
            const newTotalEarning = totalEarning + earning * remainingTime;
            maxProfit.push(newTotalEarning);
            max_profit(remainingTime, newTotalEarning, newPropertyCreated);
        }
    }
}

max_profit(13, 0, { "Theatre": 0, "Pub": 0, "Commercial Park": 0 });

console.log(Math.max(...maxProfit));
