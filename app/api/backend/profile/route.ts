import { BACKEND_URL } from "../config";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization");

    const res = await fetch(`${BACKEND_URL}/profile`, {
      headers: { Authorization: token || "" },
    });

    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    return Response.json({ error: "Failed to reach backend" }, { status: 500 });
  }
}

