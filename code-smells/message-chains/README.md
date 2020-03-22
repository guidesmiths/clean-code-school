# Message Chains - Train Wrecks

*Code Smells -> Couplers*

[Inappropriate Intimacy](https://github.com/guidesmiths/clean-code-school/tree/master/code-smells/inappropriate-intimacy)


## Signs and Symptoms

In code you see a series of calls resembling `$a->b()->c()->d()`

## Reasons for the Problem

A message chain occurs when a client requests another object, that object requests yet another one, and so on. These chains mean that the client is dependent on navigation along the class structure. Any changes in these relationships require modifying the client.


[Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter)

```
 - Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.

 - Each unit should only talk to its friends; don't talk to strangers.

 - Only talk to your immediate friends.
```

[Tell, don't ask](http://wiki3.cosc.canterbury.ac.nz/index.php/Tell,_don%27t_ask)

```
"Objects should tell each other what to do by issuing commands to one another, rather than asking each other for information and then make decisions based on the information obtained."
```

## Treatment

Use [Extract Method](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/extract-method) for this functionality and move it to the beginning of the chain, by using [Move Method](https://github.com/guidesmiths/clean-code-school/tree/master/refactors/move-method)

### Refs

---

[Refactoring Guru](https://refactoring.guru/smells/message-chains)

[Trainwreck vs. Method Chaining](http://randomthoughtsonjavaprogramming.blogspot.com/2013/10/trainwreck-vs-method-chaining.html)

[Train Wreck](https://devcards.io/train-wreck)

[Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter)

[Tell Dont Ask](http://wiki.c2.com/?TellDontAsk)