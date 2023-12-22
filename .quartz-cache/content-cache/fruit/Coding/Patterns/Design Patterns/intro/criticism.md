# Criticism of patterns

It seems like only lazy people haven't criticized design patterns yet. Let's take a look at the most typical arguments against using patterns.

#### Kludges for a weak programming language

Usually the need for patterns arises when people choose a programming language or a technology that lacks the necessary level of abstraction. In this case, patterns become a kludge that gives the language much-needed super-abilities.

For example, the [[fruit/Coding/Patterns/Design Patterns/catalog/behavioral/strategy|Strategy]] pattern can be implemented with a simple anonymous (lambda) function in most modern programming languages.

#### Inefficient solutions

Patterns try to systematize approaches that are already widely used. This unification is viewed by many as a dogma, and they implement patterns "to the letter", without adapting them to the context of their project.

#### Unjustified use

> If all you have is a hammer, everything looks like a nail.

This is the problem that haunts many novices who have just familiarized themselves with patterns. Having learned about patterns, they try to apply them everywhere, even in situations where simpler code would do just fine.
