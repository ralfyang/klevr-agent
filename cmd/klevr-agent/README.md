# klevr-agent
## Introduction
Klevr manager와 통신을 하며 할당된 작업을 수행하는 Klevr agent

## Process
1. 에이전트 구동시 매니저에게 handshake를 보낸다. 
1. 처음 handshake를 받은 에이전트가 primary가 된다.
1. primary는 매니저에게 command를 받아와 task를 실행한다.
   1. secondary는 주기적으로 primary의 status check를 하여 이상이 있으면 매니저에게 api 호출을 한다.
1. 각 task마다 업데이트한 정보를 매니저에게 전달한다.

### pkg
```shell script
.
├── protobuf                     // grpc를 위한 protoc 파일
│   ├── task.pb.go
│   └── task.proto
├── agent_info.go                // get agent info
├── agents.go                    // Agent main
├── handler.go                   // gRPC handler
├── handshake.go                 // Handshake to Manager
├── init_agent.go                // Create agentkey, initialize primary
├── primary_status_report.go     // Primary status report to Manager
└── task_mgmt.go                 // Tasks manage
```

## How to use
- Configuration

| parameters | description | default |
| --- | ---- | --- | 
| apikey | Account ID from Klevr service |  | 
| platform | [baremetal, k8s, aws] - Service Platform for Host build up |  |
| zoneId | Zone ID from Klevr service |  | 
| manager | IP address from Klevr manager |  | 


- Useage
```shell script
go run ./main.go -apiKey="" -platform="" -manager="" -zoneId=""
```
