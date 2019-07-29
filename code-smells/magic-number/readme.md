# Magic number code smell

A magic number is a numeric value that’s encountered in the source but has no obvious meaning.
This “anti-pattern” makes it harder to understand the program and refactor the code.

As an example of this situation we have a script which takes a json containing data for some chemical elements and generates a new json with more data calculated using constants and well-known formulas such as the E=mc2.

These constants or unit conversion factors should not be 'hard coded' in order to avoid mistakes and increase code-readability, so we have them placed in a specific file where their meanings can be infered from their names.
