const grpc = require("grpc")
const hello_pb = require("./hello_pb")

function serialize_HelloReply(arg) {
  if(!(arg instanceof hello_pb.HelloReply)) {
    throw new Error('Expected argument of type HelloReply')
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_HelloReply(buffer_arg) {
  return hello_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HelloRequest(arg) {
  if (!(arg instanceof hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type HelloRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_HelloRequest(buffer_arg) {
  return hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

const GreeterService = exports.GreeterService = {
  sayHello: {
    path: "/hello.Greeter/SayHello",
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloRequest,
    responseType: hello_pb.HelloReply,
    requestSerialize: serialize_HelloRequest,
    requestDeserialize: deserialize_HelloRequest,
    responseSerialize: serialize_HelloReply,
    responseDeserialize: deserialize_HelloReply,
  }
}

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService)