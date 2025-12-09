import Database from "better-sqlite3";

// Option 1 (simple) — DB in project root
const db = new Database("database.db");

// Option 2 — if using folder, make sure "db" folder exists
// const db = new Database("db/database.db");

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS hooks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    usage TEXT,
    path TEXT
  )
`
).run();

db.prepare(
  `
  INSERT INTO hooks (name, usage, path) VALUES
    ('useState', 'State management for simple values like string, boolean, number', '/useState'),
    ('useEffect', 'Handle side effects, fetch, subscriptions, DOM changes', '/useEffect'),
    ('useCallBack', 'can send thedatat to theparent an d', '/useEffect')
`
).run();

console.log("Table created and dummy data inserted successfully!");
