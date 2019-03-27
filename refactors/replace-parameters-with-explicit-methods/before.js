/* THE PROBLEM
 * A method is split into parts, each of which is run depending on the value of a parameter
 *
 * Why Refactor
 * A method containing parameter-dependent variants has grown massive. Non-trivial code is run in each branch and new variants are added very rarely.
 *
 * Benefits
 * Improves code readability. It’s much easier to understand the purpose of startEngine() than  setValue("engineEnabled", true)
 *
 * When Not to Use
 * Don’t replace a parameter with explicit methods if a method is rarely changed and new variants aren’t added inside it
 *
 * Code Smells
 * Long method
 *  A method contains too many lines of code. Generally, any method longer than ten lines should make you start asking questions
 * Swith Statements
 *  You have a complex switch operator or sequence of if statements.
 */

let height;
let width;

const setValue = (name, value) => {
  if (name.equals('height')) {
    height = value;
    return;
  }
  if (name.equals('width')) {
    width = value;
    return;
  }
};

const createRectangle = () => {
  setValue('height', 10);
  setValue('width', 20);
};

const main = () => {
  createRectangle();
};

main();
