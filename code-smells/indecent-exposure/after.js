/* This smell indicates the lack of information hiding.
The smell occurs when methods or classes that ought not be visible to clients are publicly visible to them.
Exposing such code means that clients know about code that is unimportant or only indirectly important. 
This contributes to the complexity of a design.
This is a "Couplers" Code Smell type.
*/

const buildJail = () => {
    // Understands prisoners treatment

    const HOUR = 1000 * 60 * 60;
    
    const prisoners = [];

    const feed = () => {
        prisoners.forEach(prisoner => prisoner && prisoner.feed());
    };

    const addPrisoner = prisoner => {
        prisoners.push(prisoner);
        console.log(`${prisoner.name} just went sent off to prison!`);
    };

    // setInterval(feed, HOUR * 4);
    setInterval(feed, 1000);

    return {
        addPrisoner,
    };
    
};
    
const createPolice = jail => {
// Understands punishments

    const report = criminal => {
        // would understand how to process "death"
        if (criminal.punishment === 'prison') {
            jail.addPrisoner(criminal); // details hidden
        }
    };

    return {
        report,
    };
};

const createCriminal = (name, punishment) => ({
    name,
    punishment,
    feed: () => { console.log(`${name} just ate!`) },
});

(() => {
    const criminals = [
        createCriminal('Joe Dalton', 'prison'),
        createCriminal('William Dalton', 'death'),
        createCriminal('Jack Dalton', 'prison'),
        createCriminal('Averell Dalton', 'prison')
    ];

    const jail = buildJail(); // internals also exposed here!
    const police = createPolice(jail);
    criminals.forEach(police.report);
    setInterval(() => {}, 5000); // let it hang
})();
