import { MongoClient } from "https://deno.land/x/mongo@v0.30.1/mod.ts";
const client = new MongoClient();

await client.connect("mongodb://localhost:27017");

interface BlogSchema {
  _id: { $oid: string };
  name: string;
  title: string;
  blogBody: string;
}

export const db = client.database("blog");