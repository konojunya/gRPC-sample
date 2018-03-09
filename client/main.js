const grpc = require("grpc")
const messages = require("../lib/hello_pb")
const services = require("../lib/hello_grpc_pb")

function main() {
  const client = new services.GreeterClient("localhost:3000", grpc.credentials.createInsecure())
  const request = new messages.HelloRequest()

  const name = "konojunya"
  request.setName(name)
  client.sayHello(request, function(err, response) {
    if(err != null) {
      console.error(err)
    }
    console.log(response.getMessage())
  })
}
main()