import postgres from "postgres";

const sql = postgres(process.env.DATABASE);

export default sql;
