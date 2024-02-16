1. CREATE MODULES

```
nest g module <module-name>
```

2. Compose Docker Image

```
docker compose up dev-db -d

check

docker ps

-then check Container id
docker logs <container-id>
docker logs d7e3c7b9cb26

```

3. Prisma!

```
yarn add -D prisma
yarn add @prisma/client
npx prisma init

```

4. Make prisma models and

```
npx prisma init
```

5. Generate types from prisma to use throughout the project

```
npx prisma generate
```

6. Access prisma client.

```
npx prisma generate
```
