## ⚪ ️ 5.1 Enrich your linters and abort builds that have linting issues

:white_check_mark: **Do:** Linters are a free lunch, with 5 min setup you get for free an auto-pilot guarding your code and catching significant issue as you type. Gone are the days where linting was about cosmetics (no semi-colons!). Nowadays, Linters can catch severe issues like errors that are not thrown correctly and losing information. On top of your basic set of rules (like [ESLint standard](https://www.npmjs.com/package/eslint-plugin-standard) or [Airbnb style](https://www.npmjs.com/package/eslint-config-airbnb)), consider including some specializing Linters like [eslint-plugin-chai-expect](https://www.npmjs.com/package/eslint-plugin-chai-expect) that can discover tests without assertions, [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise?activeTab=readme) can discover promises with no resolve (your code will never continue), [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security?activeTab=readme) which can discover eager regex expressions that might get used for DOS attacks, and [eslint-plugin-you-dont-need-lodash-underscore](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) is capable of alarming when the code uses utility library methods that are part of the V8 core methods like Lodash.\_map(…)
<br/>

❌ **Otherwise:** Consider a rainy day where your production keeps crashing but the logs don’t display the error stack trace. What happened? Your code mistakenly threw a non-error object and the stack trace was lost, a good reason for banging your head against a brick wall. A 5 min linter setup could detect this TYPO and save your day

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :thumbsdown: Anti-Pattern Example: The wrong Error object is thrown mistakenly, no stack-trace will appear for this error. Luckily, ESLint catches the next production bug

![alt text](fruit/Coding/Testing/javascript/assets/bp-21-yoni-goldberg-eslint.jpeg "The wrong Error object is thrown mistakenly, no stack-trace will appear for this error. Luckily, ESLint catches the next production bug")

</details>

<br/><br/>

