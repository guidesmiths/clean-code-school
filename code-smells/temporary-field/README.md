# Temporary Field

This **code smell** is part of Object-Orientation Abusers category.

## Introduction

First described in [*Refactoring*, Martin Fowler et al., Addison-Wesley 1999. p. 84](https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672/ref=sr_1_2?crid=M4FBZXR53VK8&dchild=1&keywords=refactoring+martin+fowler&qid=1589303377&sprefix=refactoring+ma%2Caps%2C236&sr=8-2)

> Sometimes you see an object in which an instance variable is set only in certain circumstances. Such code is difficult to understand, because you expect an object to need all of its variables. Trying to understand why a variable is there when it doesn't seem to be used can drive you nuts.[...]

> A common case of temporary field occurs when a complicated algorithm needs several variables. Because the implementer didn't want to pass around a huge parameter list (who does?), he put them in fields. But the fields are valid only during the algorithm; in other contexts they are just plain confusing. [...]

Being the explanation pretty straightforward, the book does not provide us with an example.

## Signs and Symptoms

As described in *Refactoring*, this code smell arises when we have an object with variables that get their values under certain circumstances. For example, when having a method or function that requires a long list of parameters to do some computation or implement an algorithm. To avoid this situation, we decide to include them as fields or propeties in the class.

## Reasons for the Problem

- Class variables created for the algorithm only get values during their execution and remain unused the rest of the time
- Difficult to understand this class as you would normally expect to use all those variables

## Treatment

- Temporary field and code associated to them can be put in a separate class via [Extract Class](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/extract-class)
- [Introduce Null Object](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/introduce-null-object) and use it when checking the temporary field values

## References

- [Refactoring Guru - Temporary Field](https://refactoring.guru/smells/temporary-field)
- [University of Canterbury - Temporary field smell](http://wiki3.cosc.canterbury.ac.nz/index.php/Temporary_field_smell)
- [Mark Seeman - Temporary Field code smell](https://blog.ploeh.dk/2015/09/18/temporary-field-code-smell/)