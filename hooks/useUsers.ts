import { useMemo, useState } from "react"
import type { User, UserChanges } from "@/types/user"

export function useUsers(initialUsers: User[]) {
  const [users, setUsers] = useState(initialUsers);
  const [cityFilter, setCityFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const uniqueCities = useMemo(() => {
    return users.map((user) => { return user.address.city }).sort();
  }, [users]);

  const filtredUsers = useMemo(() => {
    return users.filter((user) =>
      (user.address.city as string).includes(cityFilter) && (user.name as string).toLowerCase().includes(searchFilter.toLowerCase())
    );
  }, [searchFilter, cityFilter, users]);

  const updateUser = (editingUser: User, changes: UserChanges) => {
    const currentUser = users.find((user) => user.id === editingUser.id);

    const updatedUsers = users.map((user) => {
      if (user.id === (currentUser as User).id) {
        return {
          ...user,
          name: changes.name,
          email: changes.email,
          address: {
            city: changes.city
          }
        }
      }

      return user;
    });

    return setUsers(updatedUsers);
  };

  return {
    users: filtredUsers,
    uniqueCities: uniqueCities,
    setCityFilter: setCityFilter,
    setSearchFilter: setSearchFilter,
    updateUser: updateUser
  };
}