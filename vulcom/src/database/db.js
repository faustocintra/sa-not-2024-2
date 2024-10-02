import pg from "postgres";

const { Pool} = pg

const conn = new Pool({connectionString: process.env.DATABASE});

export default conn;
