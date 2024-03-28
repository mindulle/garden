# Divergent Change


> [!NOTE] Divergent Change
> _Divergent Change_ resembles [[fruit/Coding/smells/change-preventers/shotgun-surgery|Shotgun Surgery]] but is actually the opposite smell. _Divergent Change_ is when many changes are made to a single class. _Shotgun Surgery_ refers to when a single change is made to multiple classes simultaneously.

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/divergent-change-01.png?id=d62e68e1778d67bf82ff74064c24de33"
srcset="https://refactoring.guru/images/refactoring/content/smells/divergent-change-01-2x.png?id=1c7d20737703941d1e3f7ad85e180578 2x"
width="500" height="300" />
</figure>
### Reasons for the Problem
Often these divergent modifications are due to poor program structure or "copypasta programming".

### Treatment
- Split up the behavior of the class via [Extract Class](/extract-class).
- If different classes have the same behavior, you may want to combine the classes through inheritance ([Extract Superclass](/extract-superclass) and [Extract Subclass](/extract-subclass)).

<figure class="image">
<img
src="https://refactoring.guru/images/refactoring/content/smells/divergent-change-02.png?id=21b6fd7cba36f123c09497cb8f5a5625"
srcset="https://refactoring.guru/images/refactoring/content/smells/divergent-change-02-2x.png?id=581f6218d8a2393ece88419ad60831da 2x"
loading="lazy" width="500" height="300" />
</figure>
### Payoff
- Improves code organization.
- Reduces code duplication.
- Simplifies support.
