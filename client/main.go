package main

import (
	"context"
	"log"

	pb "github.com/konojunya/gRPC-sample/lib"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:3000", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	c := pb.NewGreeterClient(conn)

	r, err := c.SayHello(context.Background(), &pb.HelloRequest{Name: "konojunya"})
	if err != nil {
		panic(err)
	}
	log.Println(r.Message)
}
