# gRPC-sample

gRPCを使った通信のサンプル

> serverはHello + 投げられた名前を返すように実装  
> clientは名前をserverに投げる  
> するとHello + 名前が受け取れる

1. generate
  - golang
    - `protoc -I proto proto/hello.proto --go_out=plugins=grpc:lib`
  - nodejs
    - `protoc -I proto proto/hello.proto --js_out=grpc:lib`
2. run server
  - `go run server/main.go`
3. run client
  - golang
    - `go run client/main.go`
  - nodejs
    - `npm install`
    - `node client/main.js`