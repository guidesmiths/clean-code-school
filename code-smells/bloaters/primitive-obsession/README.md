# Primitive Obsession

![](https://www.pragmaticways.com/wp-content/uploads/2020/02/code-smells-primitive-obsession.png)

## Table of Contents

- [Type of Code Smell](#type-of-code-smell)
- [Description](#description)
- [Recognition. Signs and Symptoms](#recognition-signs-and-symptoms)
- [Refactoring](#refactoring)
- [References](#references)

## Type of Code Smell

- [x] Bloaters
- [ ] Object-Orientation Abusers
- [ ] Change Preventers
- [ ] Dispensables
- [ ] Couplers

## Description

This code smell appears when you use *primitive types* to represent *domain concepts*.

In JavaScript, a *primitive* type is data that is not an _object_ and has _no methods_. This language has _6(*)_ different primitive data types:

|   primitive   |         example         |    type     | comment |
|---------------|-------------------------|-------------|---------|
|  _undefined_  |       undefined         |  undefined  |         |
|   _symbol_    | let sym = Symbol('foo') |  undefined  | New in ES6. Unique and immutable, might be used as keys of an Object property |
|   _boolean_   |          true           |   boolean   | Valid values: *true* and *false* |
|   _string_    |     'I am a string!'    |   string    | Variable size (length * 2 bytes; max: ~16GB) |
|   _number_    |           33            |   number    | 8 bytes. Allowed values: 18437736874454810624 finite numbers (half positive half negative, including positive and negative zero) and three symbolic values NaN, Positive Infinity & Negative Infinity |
|   _bigint_    |           33n           |   bigint    | Since NodeJS 10.4 - Can store arbitrarily large integers. This could be done with strings, but bigints support arithmetic operations |
|       *       |           *             |     *       |   *     |
|    _null_     |          null           |   object    |         |
|   _object_    |     { a: 'hello' }      |   object    |         |
|  _function_   |         () => {}        |  function   |         |


A *domain concept* is the idea that belongs to the concept of your app. I.e.: in a blog app, a domain concept could be a _post_, a _comment_, a _like_... In a library, we would talk about _books_, _authors_ ...


## Recognition. Signs and Symptoms

- Use of primitives instead of small objects for simple tasks (such as currency, ranges, special strings for phone numbers, etc.)

- Use of constants for coding information (such as a constant `USER_ADMIN_ROLE = 1` for referring to users with administrator rights.)

- Use of string constants as field names for use in data arrays.

## Refactoring

Depending of the different signs of the code smell, there are several refactors that can be implemented to solve it.

- If you have a large variety of primitive fields, it may be possible to logically group some of them into their own class. Even better, move the behavior associated with this data into the class too. For this task, try [Replace Data Value with Object](https://refactoring.guru/replace-data-value-with-object).

<details>
  <summary>Example</summary>
  From:
```java
class User {
  private String userName;
  private String password;

  public User(String userName, String password) {
    this.userName = userName;
    this.password = password;
  }
}
```
To:
```java
class Password {
  private String value;

  public Password(String value) {
    if (value.length() < 8) {
      throw new InvalidPasswordException('too short!!');
    }
    this.value = value;
  };
}

class User {
  private String userName;
  private Password password;

  public User(String userName, Password password) {
    this.userName = userName;
    this.password = password;
  }
};

User user = new User('leonardoDaVinci', 'leoInDaHous');
```
</details>

<details>
  <summary>Or...</summary>
  From:
```javascript
const User = (name, email) => ({
  name,
  email,
});
```

To:
```javascript
const Name = value => { ... };
const Email = value => { ... };

const User = (_name, _email) => ({
  name: Name(_name),
  email: Email(_email),
});
```
</details>

- If the values of primitive fields are used in method parameters, go with [Introduce Parameter Object](https://refactoring.guru/introduce-parameter-object) ([:octocat:](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/introduce-parameter-object)) ([:movie_camera:](https://youtu.be/k-5M7oR5hLI)) or [Preserve Whole Object](https://refactoring.guru/preserve-whole-object).

<details>
  <summary>Example</summary>
  From:
```javascript
const calculateSeconds = (startDate, endDate) => { ... };
```

To:
```javascript
const calculateSeconds = (dateRange) => { ... };
```
</details>


- When complicated data is coded in variables, use [Replace Type Code with Class](https://refactoring.guru/replace-type-code-with-classs), [Replace Type Code with Subclasses](https://refactoring.guru/replace-type-code-with-subclasses) or [Replace Type Code with State/Strategy](https://refactoring.guru/replace-type-code-with-state-strategy) ([:octocat:](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/replace-type-code-with-state-or-strategy)) ([:movie_camera](https://youtu.be/L4vHWK12rIQ)).

- If there are arrays among the variables, use [Replace Array with Object](https://refactoring.guru/replace-array-with-object).

<details>
  <summary>Example</summary>
From:
```javascript
const row = [];
row[0] = 'Betis';
row[1] = 'Joaquín';
```

To
```javascript
const Row = (teamName, teamCaptain) => ({
  teamName,
  teamCaptain,
});
const row = Row('Betis', 'Joaquín';
});
```
</details>


## References

- [Primitive Obsession on Refactoring Guru](https://refactoring.guru/smells/primitive-obsession)

- [Replace Data Value with Object on Refactoring Guru](https://refactoring.guru/replace-data-value-with-object)

- [Introduce Parameter Object on Refactoring Guru](https://refactoring.guru/introduce-parameter-object)

- [Introduce Parameter Object on Clean Code School](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/introduce-parameter-object) ([:movie_camera:](https://youtu.be/k-5M7oR5hLI))

- [Preserve Whole Object on Refactoring Guru](https://refactoring.guru/preserve-whole-object)

- [Replace Type Code with Class on Refactoring Guru](https://refactoring.guru/replace-type-code-with-classs)

- [Replace Type Code with Subclasses on Refactoring Guru](https://refactoring.guru/replace-type-code-with-subclasses) 

- [Replace Type Code with State/Strategy on Refactoring Guru](https://refactoring.guru/replace-type-code-with-state-strategy)

- [Replace Type Code with State/Strategy on Clean Code School](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/replace-type-code-with-state-or-strategy) ([:movie_camera](https://youtu.be/L4vHWK12rIQ))

- [Replace Array with Object on Refactoring Guru](https://refactoring.guru/replace-array-with-object)

- [Primitive Obsession on Pragmatic Ways](https://www.pragmaticways.com/31-code-smells-you-must-know/#10_Primitive_Obsession)

- [An Overview of BigInt in Node.js](http://thecodebarbarian.com/an-overview-of-bigint-in-node-js.html)

- :movie_camera: [Primitive Obsession | Code Walks 055](https://www.youtube.com/watch?v=wKtooLW8GDc)

- [This doc template](https://gist.github.com/reymon359/1dbeab82c0323cc2d6e0d010ba71ebe4)
