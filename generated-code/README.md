# protocol-buffers-javascript-sample

## required

- [protoc](https://grpc.io/docs/protoc-installation/ "protoc")

https://grpc.io/docs/protoc-installation/

## demo

https://thirosue.github.io/protocol-buffers-javascript-sample/generated-code/

## sample proto

```
syntax = "proto3";
package person;

message Person {
  string name = 1;
  uint32 id = 2;
  string email = 3;
}
```

## generate client code

```
$ pwd
$ /path/to/directory/protocol-buffers-javascript-sample/generated-code
$ protoc --proto_path=. --js_out=import_style=commonjs,binary:. person.proto
```

## build

```
$ yarn
$ yarn build
```
