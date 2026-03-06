import { BACKEND_URL } from "./config";

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/`);
    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    return Response.json({ error: "Failed to reach backend" }, { status: 500 });
  }
}

