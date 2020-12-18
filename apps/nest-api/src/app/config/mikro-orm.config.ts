import { Options } from "@mikro-orm/core";

const config = {
    dbName: 'postgres',
    type: 'postgresql',
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    debug: true,   
  } as Options;
  
  export default config;