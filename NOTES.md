1. CREATE MODULES

```
nest g module <module-name>
```

2. Compose Docker Image

```
docker compose up dev-db -d

check

docker ps

-then chech Container id
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
