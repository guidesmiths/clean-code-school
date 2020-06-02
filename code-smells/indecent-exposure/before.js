/* This smell indicates the lack of information hiding.
The smell occurs when methods or classes that ought not be visible to clients are publicly visible to them.
Exposing such code means that clients know about code that is unimportant or only indirectly important. 
This contributes to the complexity of a design.
This is a "Couplers" Code Smell type.
*/

const buildJail = () => {
// Understands prisoners treatment

    const prisoners = [];

    const feed = () => {
        prisoners.forEach(prisoner => prisoner && prisoner.feed());
    };

    return {
        feed, // code smell!
        prisoners, // code smell!
    };

};

const createPolice = (jail) => {
// Understands punishments

    const report = prisoner => {
        if (prisoner.punishment === 'prison') {
            jail.prisoners.push(prisoner); // too much detail to handle - DANGEROUS exposure
            console.log(`${prisoner.name} just went sent off to prison!`);
        }
    };

    setInterval(jail.feed, 1000 * 60 * 60 * 4); // magic number

    return {
        report,
    };
};

(() => {
    const prisoners = [
        { name: 'Joe Dalton', punishment: 'prison', feed: () => { console.log('Joe Dalton just ate!') } }, // Lacking a factory!
        { name: 'William Dalton', punishment: 'death', feed: () => { console.log('William Dalton just ate!') } },
        { name: 'Jack Dalton', punishment: 'prison', feed: () => { console.log('Jack Dalton just ate!') } },
        { name: 'Averell Dalton', punishment: 'prison', feed: () => { console.log('Averell Dalton just ate!') } },
    ];

    const jail = buildJail(); // internals also exposed here!
    const police = createPolice(jail);
    prisoners.forEach(police.report);
    setInterval(() => {}, 5000); // let it hang
})();