# User Management system

User Management is a simple web application for creating new users.

## Technologies used
- Docker and Docker compose
- Postgresql
- Nodejs
- React
- cypress(e2e tests)

## Requirements
- Docker and Docker compose
- Nodejs
- node-gyp
- Python
- git

## Services
- db-schema is a service manage migrations and init data for postgresql
- docker-compose is a docker compose configuration
- user-service is nodejs microservice mange users on the server
- use-web-ui is react web application

## Installation
- Git clone `git git@github.com:VovaMukovozov/user-management-system.git`
- Go to project and install all npm dependencies

```
cd db-schema 
npm i

cd e2e 
npm i

cd users-service
npm i

cd users-web-ui
npm

```

### Run docker compose
```
cd docker-compose
docker-compose -f docker-compose.yml up -d --build
```
> Notes: waiting for full creation all containers, for example 
> will take time to build a PG container and the db-schema will try to start and will be finished after the process exits with status code 0
    
### Run e2e tests
```
cd e2e
npm run cypress:open
```
> Notes: if you have some problem with cypress you should install 
> missing dependencies for do that please enter to [cypress install tutorial](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)