---
last-modified: "2022-11-09"
visibility: "private"
note-field:
  - "develop"
tree-purpose:
  - "background"
tree-timeliness:
  - "lts"
content-level:
  - "beginner"
content-type:
  - "text"
content-purpose:
  - "reference"
tags:
  - "tree"
---
```toc
style: bullet
max_depth: 3
```
# README
| ![readme.so \|300 ](https://readme.so/screenshot.png)    |
| :---: |
| __ [readme.so](https://readme.so/) by [Katherine Oelsner](https://twitter.com/katherinecodes)__    |

# Issue
- example of ionic framework
![[Pasted image 20221109142128.png ]]
## English
### FEATURE REQUEST
> [!tldr] [en]feature-request.yml
```yaml
name: 💡 Feature Request
description: Suggest an idea for PROJECT_NAME
title: 'feat: '
body:
  - type: checkboxes
    attributes:
      label: Prerequisites
      description: Please ensure you have completed all of the following.
      options:
        - label: I have read the [Contributing Guidelines](*ADDRESS_OF_CONTRIBUTING_GUIDELINES*).
          required: true
        - label: I agree to follow the [Code of Conduct](*ADDRESS_OF_CODE-OF-COUNDUCT*).
          required: true
        - label: I have searched for [existing issues](*ADDRESS_OF_ISSUES*) that already include this feature request, without success.
          required: true
  - type: textarea
    attributes:
      label: Describe the Feature Request
      description: A clear and concise description of what the feature does.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Describe the Use Case
      description: A clear and concise use case for what problem this feature would solve.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Describe Preferred Solution
      description: A clear and concise description of what you how you want this feature to be added to *PROJCET_NAME*.
  - type: textarea
    attributes:
      label: Describe Alternatives
      description: A clear and concise description of any alternative solutions or features you have considered.
  - type: textarea
    attributes:
      label: Related Code
      description: If you are able to illustrate the feature request with an example, please provide a sample *ADDRESS_OF_DEMO*.
  - type: textarea 
    attributes:
      label: Additional Information
      description: List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to implement, Stack Overflow links, forum links, etc.
```

### BUG REPORT
> [!tldr] [en]bug-report.yml
```yaml
name: 🐛 Bug Report
description: Create a report to help us improve *PROJCET_NAME*
title: 'bug: '
body:
  - type: checkboxes
    attributes:
      label: Prerequisites
      description: Please ensure you have completed all of the following.
      options:
        - label: I have read the [Contributing Guidelines](*ADDRESS_OF_CONTRIBUTING_GUILDELINES*).
          required: true
        - label: I agree to follow the [Code of Conduct](*ADDRESS_OF_CODE_OF_CONDUCT*).
          required: true
        - label: I have searched for [existing issues](*ADDRESS_OF_ISSUE*) that already report this problem, without success.
          required: true
  - type: checkboxes
    attributes:
      label: PROJCET_NAME Version
      description: Please select which versions of *PROJCET_NAME* this issue impacts.
      options:
        - label: v0.x
        - label: v1.x
        - label: v2.x
        - label: v3.x
  - type: textarea
    attributes:
      label: Current Behavior
      description: A clear description of what the bug is and how it manifests.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Expected Behavior
      description: A clear description of what you expected to happen.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to Reproduce
      description: Please explain the steps required to duplicate this issue.
    validations:
      required: true
  - type: input
    attributes:
      label: Code Reproduction URL
      description: Please reproduce this issue in a blank *PROJCET_NAME* starter application and provide a link to the repo. Try out [DEMONSTRATION](*ADDRESS_OF_DEMO*) to quickly spin up an *PROJCET_NAME*. This is the best way to ensure this issue is triaged quickly. Issues without a code reproduction may be closed if the *NAME_OF_GROUP* cannot reproduce the issue you are reporting.
      placeholder: https://github.com/...
  - type: textarea
    attributes:
      label: Additional Information
      description: List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc.
```

### CONFIG
> [!tldr] [en]config.yml
```yaml
contact_links:
  - name: :emoji: *ADDRESS_OF_ANOTHER_REPO_OR_SUBJECT*
    url: https://github.com/*USER_NAME*/*REPO_NAME*/issues/new/choose
    about: This issue tracker is not for *SUBJECT* issues. Please file documentation issues on the Ionic *SUBJECT* repo.
  - name: :emoji: *ADDRESS_OF_ANOTHER_REPO_OR_SUBJECT*
    url: https://github.com/*USER_NAME*/*REPO_NAME*/issues/new/choose
    about: This issue tracker is not for *SUBJECT* issues. Please file *SUBJECT* issues on the *SUBJECT* repo.
  - name: emoji: *ADDRESS_OF_ANOTHER_REPO_OR_SUBJECT*
    url: https://github.com/*USER_NAME*/*REPO_NAME*/issues/new/choose
    about: This issue tracker is not for support *SUBJECT*. Please post your question on the *SUBJECT OR EMAIL*.
```
### SEQURITY VULNERAVILITY
![[Pasted image 20221109142802.png]]
![[Pasted image 20221109142852.png]]
> [!tldr] Security.md
```yaml
# Security Policy

## Reporting a Vulnerability

Please report security vulnerabilities via email to *username@example.com*.

```


# Pull request
## English
> [!tldr] [en]PULL_REQUEST_TEMPLATE.md
```markdown
<!-- Please refer to our contributing documentation for any questions on submitting a pull request, or let us know here if you need any help: *ADDRESS_OF_CONTRIBUTING_GUIDE* -->

## Pull request checklist

Please check if your PR fulfills the following requirements:
- [ ] Tests for the changes have been added (for bug fixes / features)
- [ ] Docs have been reviewed and added / updated if needed (for bug fixes / features)
  - Some docs updates need to be made in the `ionic-docs` repo, in a separate PR. See the [contributing guide](*ADDRESS_OF_CONTURIBUTING_GUIDE*) for details.
- [ ] Build (`npm run build`) was run locally and any changes were pushed
- [ ] Lint (`npm run lint`) has passed locally and any fixes were made for failures


## Pull request type

<!-- Please do not submit updates to dependencies unless it fixes an issue. --> 

<!-- Please try to limit your pull request to one type, submit multiple pull requests if needed. --> 

Please check the type of change your PR introduces:
- [ ] Bugfix
- [ ] Feature
- [ ] Code style update (formatting, renaming)
- [ ] Refactoring (no functional changes, no api changes)
- [ ] Build related changes
- [ ] Documentation content changes
- [ ] Other (please describe): 


## What is the current behavior?
<!-- Please describe the current behavior that you are modifying. -->


<!-- Issues are required for both bug fixes and features. -->
Issue URL: 


## What is the new behavior?
<!-- Please describe the behavior or changes that are being added by this PR. -->

-
-
-

## Does this introduce a breaking change?

- [ ] Yes
- [ ] No

<!-- If this introduces a breaking change, please describe the impact and migration path for existing applications below. -->


## Other information

<!-- Any other information that is important to this PR such as screenshots of how the component looks before and after the change. -->
```
