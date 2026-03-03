const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
  const res = await fetch(`${API_URL}/users/`);
  return res.json();
}
import { getUsers } from "./api";

export default async function Page() {
  const users = await getUsers();
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}

