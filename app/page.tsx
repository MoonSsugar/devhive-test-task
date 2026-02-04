import { getUsers } from "@/utils/api"
import UserList from "@/components/UserList"

export default async function Home() {
  const users = await getUsers();

  return <UserList initialUsers={users}/>
}