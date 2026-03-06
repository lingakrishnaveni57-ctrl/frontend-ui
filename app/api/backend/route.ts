export async function GET() {
  const response = await fetch("http://13.201.22.139:8000");
  const data = await response.json();

  return Response.json(data);
}
