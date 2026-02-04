import { useMemo, useState } from "react"
import type { User, UserChanges } from "@/types/user"

/**
 * Custom Hook containing all business logic for the UserList.
 * Implements "Separation of Concerns" pattern: UI components are presentational,
 * while state management and filtering logic live here.
 */
export function useUsers(initialUsers: User[]) {
  const [users, setUsers] = useState(initialUsers);
  const [cityFilter, setCityFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  
// Extracting unique cities for the dropdown.
  // Using Set ensures O(1) uniqueness handling.
  const uniqueCities = useMemo(() => {
    const allCities = users.map(u => u.address.city).filter(Boolean);

    return Array.from(new Set(allCities)).sort();
  }, [users]);
// Optimized filtering: recalculates only when users or filters change.
  // Prevents heavy operations on every render.
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.address.city.includes(cityFilter) && user.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }, [searchFilter, cityFilter, users]);

  const updateUser = (editingUser: User, changes: UserChanges) => {
    const updatedUsers = users.map((user) => {
      if (user.id === editingUser.id) {
        return {
          ...user,
          name: changes.name,
          email: changes.email,
          address: {
            ...user.address,
            city: changes.city
          }
        }
      }

      return user;
    });

    return setUsers(updatedUsers);
  };

  return {
    users: filteredUsers,
    uniqueCities: uniqueCities,
    cityFilter: cityFilter,
    setCityFilter: setCityFilter,
    setSearchFilter: setSearchFilter,
    updateUser: updateUser
  };
}