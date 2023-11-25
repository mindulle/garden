## ⚪ ️ 5.8 Other, non-Node related, CI tips

:white_check_mark: **Do:** This post is focused on testing advice that is related to, or at least can be exemplified with Node JS. This bullet, however, groups few non-Node related tips that are well-known

 <ol class="postList"><li name="e3e4" id="e3e4" class="graf graf--li graf-after--p">Use a declarative syntax. This is the only option for most vendors but older versions of Jenkins allows using code or UI</li><li name="1fdc" id="1fdc" class="graf graf--li graf-after--li">Opt for a vendor that has native Docker support</li><li name="edcd" id="edcd" class="graf graf--li graf-after--li">Fail early, run your fastest tests first. Create a ‘Smoke testing’ step/milestone that groups multiple fast inspections (e.g. linting, unit tests) and provide snappy feedback to the code committer</li><li name="0375" id="0375" class="graf graf--li graf-after--li">Make it easy to skim-through all build artifacts including test reports, coverage reports, mutation reports, logs, etc</li><li name="df82" id="df82" class="graf graf--li graf-after--li">Create multiple pipelines/jobs for each event, reuse steps between them. For example, configure a job for feature branch commits and a different one for master PR. Let each reuse logic using shared steps (most vendors provide some mechanism for code reuse)</li><li name="19b0" id="19b0" class="graf graf--li graf-after--li">Never embed secrets in a job declaration, grab them from a secret store or from the job’s configuration</li><li name="b70d" id="b70d" class="graf graf--li graf-after--li">Explicitly bump version in a release build or at least ensure the developer did so</li><li name="957c" id="957c" class="graf graf--li graf-after--li">Build only once and perform all the inspections over the single build artifact (e.g. Docker image)</li><li name="339b" id="339b" class="graf graf--li graf-after--li">Test in an ephemeral environment that doesn’t drift state between builds. Caching node_modules might be the only exception</li></ol>
<br/>

❌ **Otherwise:** You‘ll miss years of wisdom

<br/><br/>

