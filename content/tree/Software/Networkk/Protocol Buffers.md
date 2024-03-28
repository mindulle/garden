## Trunk Based Development
> Protocol Buffers are language-neutral, platform-neutral extensible mechanisms for serializing structured data.

\- by *[Protocol Buffers Documentation](https://protobuf.dev/)*

## What Problems do Protocol Buffers Solve?
- Protocol buffers are the most commonly-used data format at Google. They are used extensively in inter-server communications as well as for archival storage of data on disk. Protocol buffer _messages_ and _services_ are described by engineer-authored `.proto` files.

The following shows an example `message`:
```proto
message Person {
  optional string name = 1;
  optional int32 id = 2;
  optional string email = 3;
}
```

The proto compiler is invoked at build time on `.proto` files to generate code in various programming languages (covered in [Cross-language Compatibility](https://protobuf.dev/overview/#cross-lang) later in this topic) to manipulate the corresponding protocol buffer.

The following shows you an example that uses those generated methods:

```java
Person john = Person.newBuilder()
    .setId(1234)
    .setName("John Doe")
    .setEmail("jdoe@example.com")
    .build();
output = new FileOutputStream(args[0]);
john.writeTo(output);
```

## What are the Benefits of Using Protocol Buffers?
Some of the advantages of using protocol buffers include:

- Compact data storage
- Fast parsing
- Availability in many programming languages
- Optimized functionality through automatically-generated classes

## Who Uses Protocol Buffers?

Many projects use protocol buffers, including the following:

- [gRPC](https://grpc.io/)
- [Google Cloud](https://cloud.google.com/)
- [Envoy Proxy](https://www.envoyproxy.io/)

# vs JSON vs FlatBuffer
![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*isiAhwh0A4K-IW22z1YSPw.png)
## When to use JSON

- You need or want data to be human readable
- Data from the service is directly consumed by a web browser
- Your server side application is written in JavaScript
- You aren’t prepared to tie the data model to a schema
- You don’t have the bandwidth to add another tool to your arsenal
- The operational burden of running a different kind of network service is too great

## Pros of ProtoBuf

- Relatively smaller size
- Guarantees type-safety
- Prevents schema-violations
- Gives you simple accessors
- Fast serialization/deserialization
- Backward compatibility

While we are at it, have you looked at [flatbuffers](https://codeburst.io/json-vs-protocol-buffers-vs-flatbuffers-a4247f8bda6f)?

## Performances
[](https://miro.medium.com/v2/resize:fit:720/format:webp/1*gU2SDWsEaIoI5DVVJ_h0aw.png)

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*4rzAxZR6P_IXSWSgCaSVvQ.png)