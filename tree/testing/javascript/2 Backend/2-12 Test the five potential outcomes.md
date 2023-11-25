## ⚪ ️2.12 Test the five potential outcomes

:white_check_mark: **Do:** When planning your tests, consider covering the five typical flow's outputs. When your test is triggering some action (e.g., API call), a reaction is happening, something meaningful occurs and calls for testing. Note that we don't care about how things work. Our focus is on outcomes, things that are noticeable from the outside and might affect the user. These outcomes/reactions can be put in 5 categories:

• Response - The test invokes an action (e.g., via API) and gets a response. It's now concerned with checking the response data correctness, schema, and HTTP status

• A new state - After invoking an action, some **publicly accessible** data is probably modified

• External calls - After invoking an action, the app might call an external component via HTTP or any other transport. For example, a call to send SMS, email or charge a credit card

• Message queues - The outcome of a flow might be a message in a queue

• Observability - Some things must be monitored, like errors or remarkable business events. When a transaction fails, not only we expect the right response but also correct error handling and proper logging/metrics. This information goes directly to a very important user - The ops user (i.e., production SRE/admin)


<br/><br/>

