/* A magic number is a numeric value that’s encountered 
in the source but has no obvious meaning. 
This “anti-pattern” makes it harder to understand the program and refactor the code.

Yet more difficulties arise when you need to change this magic number. 
Find and replace won’t work for this: the same number may be used for 
different purposes in different places, meaning that 
you will have to verify every line of code that uses this number. */

const data = require("./input/data.json");
const fs = require("fs");

// Functions to calculate data based on element´s info. Many numbers without obvious meaning.

const addLackOfMassInKg = element => {
  return {
    ...element,
    lackOfMassInKg: (element.z * 1.0076 + (element.n - element.z) * 1.0089 - element.weight) * 1.66 * Math.pow(10, -27)
  };
};

const addBindingEnergyInJul = element => {
  return {
    ...element,
    bindingEnergyInJul: element.lackOfMassInKg * Math.pow(3 * Math.pow(10, 8), 2)
  };
};

const addBindingEnergyPerNucleonInMeV = element => {
  return {
    ...element,
    bindingEnergyPerNucleonInMev: (element.bindingEnergyInJul / element.n) * 6.242 * Math.pow(10, 12)
  };
};

// Input mapping
const enrichedData = data
  .map(addLackOfMassInKg)
  .map(addBindingEnergyInJul)
  .map(addBindingEnergyPerNucleonInMeV);

// Writing output
fs.writeFile(
  "./output/generatedData.json",
  JSON.stringify(enrichedData),
  err => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);
