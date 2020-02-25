# Movie Notebook
Service to manage your movie collection  
[![CircleCI](https://circleci.com/gh/buharov-alexander/movie_notebook/tree/master.svg?style=svg)](https://circleci.com/gh/buharov-alexander/movie_notebook/tree/master)
[![codecov](https://codecov.io/gh/buharov-alexander/movie_notebook/branch/master/graph/badge.svg)](https://codecov.io/gh/buharov-alexander/movie_notebook)

## Build and Launch
Go to backend project:
```
cd movie_notebook_backend
```
#### Build from Source
```
./mvnw clean package
```
This Maven command:
- create a build of frontend (`frontend-maven-plugin`)
- copy the build into `movie_notebook_backend/target/classes/public` folder (`maven-antrun-plugin`)
- package a single jar file containing both the frontend and the backend

#### Launch app
Run container with Postgres database:
```
docker run -p 5433:5432 -d --name postgres_db -e POSTGRES_DB=mnb --rm postgres
```
Execute SQL script to initialize database:
```
psql -h localhost -p 5433 -U postgres mnb < movie_notebook_backend/setup/database/init.sql
```
Run Spring Boot application:
```
./mvnw spring-boot:run
```

## Build docker image and run container
To build docker image we use plugin `dockerfile-maven-plugin`.
Build docker image:
```
./mvnw dockerfile:build
```
Push docker image to Docker Hub [repository](https://hub.docker.com/repository/docker/buharovalexander/movie_notebook_backend):
```
./mvnw dockerfile:push
```
Run containers by `docker-compose`:
```
cd setup
docker-compose up -d
```
