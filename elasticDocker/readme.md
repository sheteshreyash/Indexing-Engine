# ELASTIC SEARCH DEPLOYMENT

## Update your v-ram for the deployment ( linux )

```
sudo sysctl -w vm.max_map_count=262144
```

## How To start

```
docker compose up -d
```

## Stop the Container

```
docker compose down
```

## Run with Enterprise server

```
cd enterprise_server
docker compose up -d
```

### Note

    If you r running without enterprise server then make sure to clear volumns before restarting the deployment


## Default Stuff

UserName

    elastic

Password

    abc123