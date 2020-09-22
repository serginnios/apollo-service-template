const defaultPort = 4002;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  database: {
    name: string,
    username: string,
    password: string,
    host: string,
    dialect: string,
  },
  port: number|string;
}

if (!process.env.DATABASE_NAME) {
  throw new Error('Set DATABASE_NAME in .env file');
}

if (!process.env.DATABASE_USER) {
  throw new Error('Set DATABASE_USER in .env file');
}

if (!process.env.DATABASE_PASSWORD) {
  throw new Error('Set DATABASE_PASSWORD in .env file');
}

if (!process.env.DATABASE_HOST) {
  throw new Error('Set DATABASE_HOST in .env file');
}

if (!process.env.DATABASE_DIALECT) {
  throw new Error('Set DATABASE_DIALECT in .env file');
}

const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  database: {
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
  port: process.env.PORT || defaultPort,
};

export default environment;
