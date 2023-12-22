## ⚪ ️5.5 Stay away from legal issues using license and plagiarism check

:white_check_mark: **Do:** Licensing and plagiarism issues are probably not your main concern right now, but why not tick this box as well in 10 minutes? A bunch of npm packages like [license check](https://www.npmjs.com/package/license-checker) and [plagiarism check](https://www.npmjs.com/package/plagiarism-checker) (commercial with free plan) can be easily baked into your CI pipeline and inspect for sorrows like dependencies with restrictive licenses or code that was copy-pasted from Stack Overflow and apparently violates some copyrights

❌ **Otherwise:** Unintentionally, developers might use packages with inappropriate licenses or copy paste commercial code and run into legal issues

<br/>

<details><summary>✏ <b>Code Examples</b></summary>

<br/>

### :clap: Doing It Right Example:

```shell
# install license-checker in your CI environment or also locally
npm install -g license-checker

# ask it to scan all licenses and fail with exit code other than 0 if it found unauthorized license. The CI system should catch this failure and stop the build
license-checker --summary --failOn BSD
```

<br/>

![alt text](fruit/Coding/Testing/javascript/assets/bp-25-nodejs-licsense.png)

</details>

<br/><br/>

