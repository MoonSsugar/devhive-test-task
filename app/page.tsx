import { getUsers } from "@/utils/api"
import UserList from "@/components/UserList"

/**
 * SERVER COMPONENT
 * 
 * This component fetches data on the server side.
 * Reason:
 * 1. Reduce Client-Side Waterfall.
 * 2. Better SEO.
 * 3. Keeps the initial bundle size smaller by not including fetch logic on client.
 */

export default async function Home() {
  const users = await getUsers();

  return <UserList initialUsers={users}/>
}