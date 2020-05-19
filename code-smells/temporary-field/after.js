// calculates mean and standard deviation
const calculateStatistics = durations => {
    const mean = durations.reduce((prev, total) => prev + total, 0) / durations.length;
    const variance = durations.map(duration => Math.pow(duration - mean, 2)).reduce((prev, total) => ((prev + total) / durations.length));
    const standardDeviation = Math.sqrt(variance);

    return { mean, standardDeviation };
};

const initEstimator = defaultEstimate => {
    // calculate mean plus margin
    const calculateEstimate = durationsInput => {
        // Durations must be an array of numbers
        if (!Array.isArray(durationsInput)) throw new Error('Argument must be an Array');

        if (!durationsInput.length) return defaultEstimate;
        
        const { mean, standardDeviation } = calculateStatistics(durationsInput);
        
        const maring = Math.ceil(standardDeviation);

        const estimate = mean + maring;

        // console.log('estimate', estimate, 'mean', mean, 'stdev', standardDeviation);
        return estimate;
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