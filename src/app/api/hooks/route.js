import Database from "better-sqlite3";

const db = new Database("database.db");

export async function GET() {
  try {
    const data = db.prepare("SELECT * FROM hooks").all();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

