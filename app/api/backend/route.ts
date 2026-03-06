export async function GET() {
  const response = await fetch("http://13.201.22.139:8000");
  const data = await response.json();

  return Response.json(data);
export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch("http://13.201.22.139:8000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return Response.json(await res.json());
}

