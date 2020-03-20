# Message Chains - Train Wrecks
Code Smells -> Couplers

[Inappropriate Intimacy](./inappropriate-intimacy)

In code you see a series of calls resembling `$a->b()->c()->d()`

## Treatment

Use [Extract Method](../refactors/extract-method) for this functionality and move it to the beginning of the chain, by using [Move Method](../refactors/move-method)


### Refs
-------

[Refactoring Guru](https://refactoring.guru/smells/message-chains)