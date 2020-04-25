Authing [NestJS](https://github.com/nestjs/nest) starter project template.

- [Installation](#installation)
- [Commands](#commands)
- [Feature List](#feature-list)
- [TODO](#todo)
- [License](#license)

## Installation

```bash
$ yarn
```

## Commands

### Running the app

```bash
# run in dev environment
$ npm run start:dev

# run in test environment
$ npm run start:dev

# run in production environment
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Feature List

- [x] Security. CORS and Helmet is enabled by default.
- [x] GraphQL
- [x] TypeORM
- [x] Different environment configuration support. 

- `.env.base`
- `.env.dev`
- `.env.test`
- `.env.prod`

## TODO

- [ ] **Bulitin user module with [Authing](https://authing.cn)**
- [ ] Exception Filters
- [ ] RabbitMQ
- [ ] Task Scheduler
- [ ] Plugin Middlewares
- [ ] Dcokerfile & Docker Compose
- [ ] CICD

## License
The source code for the site is licensed under the MIT license.