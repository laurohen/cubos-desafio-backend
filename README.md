# cubos-desafio-backend
Projeto para desafio tecnico Cubos


### - Exemplo de requisição de criação de regra de atendimento para cada um dos 3 casos de exemplo listados na seção "Cadastro de regra de atendimento";
  
### Atendimento para dia especifico

POST /agendasRegraAtendimento HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: c51bc705-3335-459a-8997-2baf7faab62c,29145407-ddd9-4c9c-b6ed-fbad6655cbd2
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 93
Connection: keep-alive
cache-control: no-cache

day=20-11-2019&IntervalStart=14%3A00&IntervalEnd=15%3A00&diariamente=false&semanalmente=false


### Atendimento diariamente

POST /agendasRegraAtendimento HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 02deab5b-e5fd-410b-bde5-1453e1d620ce,c7e44ad7-abb5-4cba-97ee-ac70ba9fc106
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 92
Connection: keep-alive
cache-control: no-cache

day=00-00-0000&IntervalStart=09%3A00&IntervalEnd=10%3A00&diariamente=true&semanalmente=false



### Atendimento semanalmente 

POST /agendasRegraAtendimento HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: e588750a-4cf1-4aad-bde4-3ecdff48f3e8,8db75d5c-d9f7-4bac-952c-bcc18fc5114b
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 120
Connection: keep-alive
cache-control: no-cache

day=00-00-0000&IntervalStart=09%3A00&IntervalEnd=10%3A00&diariamente=false&semanalmente=Segunda-feira+e+Quarta-feira


### - Exemplo de requisição de remoção de regra;


DELETE /agendasRegraAtendimento/2 HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 8ea3b918-0939-4cb6-8faf-d123c71cc391,1e0a1cb8-2450-4a38-a592-90c724a8a08f
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 92
Connection: keep-alive
cache-control: no-cache

day=00-00-0000&IntervalStart=09%3A00&IntervalEnd=10%3A00&diariamente=true&semanalmente=false


### - Exemplo de requisição de listagem de regras;

GET /agendasRegraAtendimento HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: c89b2e16-d3da-4b52-8781-a26f05890e17,752523dc-55a8-414d-b83a-b80342e8dff6
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 92
Connection: keep-alive
cache-control: no-cache

day=00-00-0000&IntervalStart=09%3A00&IntervalEnd=10%3A00&diariamente=true&semanalmente=false






### - Exemplo de requisição de listagem de horários;


GET /agendasHorariosDisponiveis/datastart&amp; dataend HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
User-Agent: PostmanRuntime/7.20.1
Accept: */*
Cache-Control: no-cache
Postman-Token: 6d81f7bd-d9b9-4a51-b893-9267c641d246,8c944bd4-f031-4192-8afd-20d680b4924c
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 39
Connection: keep-alive
cache-control: no-cache

datastart=15-11-2019&dataend=20-11-2019


