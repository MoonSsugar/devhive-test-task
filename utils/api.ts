import type { User } from "@/types/user";

export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return users
}