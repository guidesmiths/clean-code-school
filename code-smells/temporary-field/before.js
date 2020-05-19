/**
 * Adapted from https://blog.ploeh.dk/2015/09/18/temporary-field-code-smell/ by Mark Seeman
 * Requirements:
 *      - There must be a collection of previously observed durations
 *      - It's better estimate too high than too low
 *      - If there are no previous observations, a default estimate must be provided as fall-back mechanism
 */
const initEstimator = defaultEstimate => {
    let durations;
    let mean;
    let standardDeviation;

    // calculate mean plus margin
    const calculateEstimate = durationsInput => {
        // Durations must be an array of numbers
        if (!Array.isArray(durationsInput)) throw new Error('Argument must be an Array');

        // Durations must contain at lest one duration
        if (!durationsInput.length) return defaultEstimate;
        
        durations = durationsInput;
        // First dependency: durations
        calculateMean();
        // First and second dependencies: durations and mean
        calculateStandarDeviation();

        // Third dependecy: standardDeviation
        const maring = Math.ceil(standardDeviation);

        // Second dependecy: mean
        const estimate = mean + maring;

        // console.log('estimate', estimate, 'mean', mean, 'stdev', standardDeviation);
        return estimate;
    }

    // mean: sum(xi) / N
    const calculateMean = () => {
        // First dependecy: durations
        mean = durations.reduce((prev, total) => prev + total, 0) / durations.length;
    }

    // variance: sum(xi - mean)^2 / N
    // standardDeviation: sqrt(mean)
    // (mean - standardDeviation, mean + standardDeviation)
    const calculateStandarDeviation = () => {
        // First dependecy: durations
        // Second dependecy: mean
        const variance = durations.map(duration => Math.pow(duration - mean, 2)).reduce((prev, total) => (prev + total) / durations.length );
        standardDeviation = Math.sqrt(variance);
    }

    return {
        calculateEstimate,
    }
};

// Set estimator with a default value
const estimator = initEstimator(5);

// Calculate estimate
const estimate = estimator.calculateEstimate([2, 3, 4]);
console.log(estimate)
