/* A Solution
 * Extract the individual parts of the method into their own methods and call them instead of the original method
 *
 * How to Refactor
 * For each variant of the method, create a separate method. Run these methods based on the value of a parameter in the main method.
 * Find all places where the original method is called. In these places, place a call for one of the new parameter-dependent variants.
 * When no calls to the original method remain, delete it
 *
 * Anti-refactoring
 *  Parameterize Method
 *  Problem
 *    Multiple methods perform similar actions that are different only in their internal values, numbers or operations
 *  A solution
 *    Combine these methods by using a parameter that will pass the necessary special value
 */

let height;
let width;

const setHeight = (arg) => {
  height = arg;
};

const setWidth = (arg) => {
  width = arg;
};

const createRectangle = () => {
  setHeight(10);
  setWidth(20);
};

const main = () => {
  createRectangle();
};

main();
