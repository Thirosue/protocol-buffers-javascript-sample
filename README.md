# protocol-buffers-javascript-sample

## use

https://github.com/protobufjs/protobuf.js

## demo

https://thirosue.github.io/protocol-buffers-javascript-sample/

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

## run

```
docker run --rm -v $(pwd):/usr/share/nginx/html -p 8080:80 nginx:alpine
```

Now you can access locally in your browser the address http://localhost:8080 .
