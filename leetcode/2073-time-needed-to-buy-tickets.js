/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
// idea - minus one from every elem and add to total, filter out empty elements
// repeat until k is 1, then count everything in front of k + 1

// this solution is not optimal
// o(n^2)
var timeRequiredToBuy = function(tickets, k) {
    let kTickets = tickets[k];
    let time = 0;
    
    while (kTickets > 1) {
        time += tickets.length;

        const reducedByOne = tickets.map(person => person - 1);
        k -= reducedByOne.slice(0, k).filter(person => !person).length; // only update k index when people in front of k complete buying all of their tickets 

        tickets = reducedByOne.filter(person => person);
        kTickets -= 1;

        console.log(`time so far: ${time} -- k index: ${k} -- tickets: ${tickets}`)
    }

    time += k + 1; // for the last iteration, we only care about the people before and including k
    return time;
};

// idea - 
// count up to the same amount of k for everyone in front of k
// count every ticket for k person
// count up to almost same of k for everyone behind k
var timeRequiredToBuy = function(tickets, k) {
    let time = 0

    const peopleInFront = tickets.slice(0, k);
    peopleInFront.forEach(person => time += Math.min(person, tickets[k]));

    time += tickets[k];

    const peopleBehind = tickets.slice(k + 1);
    peopleBehind.forEach(person => time += Math.min(person, tickets[k] - 1));

    return time;
}