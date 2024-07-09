import { json } from "@sveltejs/kit";

export async function GET(event) {
  const data = "hello";
  return json(data);
}
