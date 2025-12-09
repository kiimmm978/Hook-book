// import sql from "better-sqlite3";

// const db = sql("database.db");

import Database from "better-sqlite3";
const db = new Database("database.db");

export async function GET() {
  const data = db.prepare("SELECT * FROM hooks").all();
  return Response.json(data);
}
