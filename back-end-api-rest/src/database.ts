import { createPool, Pool } from "mysql2/promise";
export async function connect() {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nomina",
    connectionLimit: 10,
  });
  return connection;
}
