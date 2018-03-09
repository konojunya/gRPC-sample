package main

import (
	"context"
	"fmt"
	"net"

	pb "github.com/konojunya/gRPC-sample/lib"
	"google.golang.org/grpc"
)

type server struct{}

func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{
		Message: "Hello " + in.Name,
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":3000")
	if err != nil {
		panic(err)
	}
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &server{})

	fmt.Println("listen on http://localhost:3000")
	s.Serve(lis)
}
