# NxNestMikroormPlayground

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Installation and Running the Application

1) Install Dependencies

```bash
npm install
```

2) Start the API via docker

```bash
docker-compose up -d
```

The API and corresponding services should now be running on:

```bash
API: localhost:3333/api

DB: localhost:5432
  host: db
  port: 5432
  username: postgres
  password: postgres

PGAdmin: localhost:5555
  username: admin@local.host
  password: password
```

