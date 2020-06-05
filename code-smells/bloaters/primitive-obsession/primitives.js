
console.log(`You are using nodejs version ${process.version}. BigInt was fully introduced in version 10.4`);

const primitives = {
  _undefined_: undefined,
  _symbol_: Symbol('foo'),
  _boolean_: true,
  _string_: 'I am a string!',
  _number_: 33,
  _bigint_: 33n,
  _null_: null,
  _object_: { a: 'hello' },
  _function_: () => { },
};
console.log('---- PRIMITIVES ----------------------')
console.table(`${primitives._undefined_}: ${typeof primitives._undefined_}`);
console.table(`Symbol('foo'): ${typeof primitives._symbol_}`);
console.table(`${primitives._boolean_}: ${typeof primitives._boolean_}`);
console.table(`${primitives._string_}: ${typeof primitives._string_}`);
console.table(`${primitives._number_}: ${typeof primitives._number_}`);
console.table(`${primitives._bigint_}: ${typeof primitives._bigint_}`);
console.table(`${primitives._null_}: ${typeof primitives._null_}`);
console.table(`${primitives._object_}: ${typeof primitives._object_}`);
console.table(`${primitives._function_}: ${typeof primitives._function_}`);
console.log('--------------------------------------')

const table = Object.keys(primitives).map(primitive => ({ primitive, value: primitives[primitive], type: typeof primitives[primitive] }));
console.table(table);
