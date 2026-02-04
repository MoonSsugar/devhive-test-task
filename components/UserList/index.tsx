"use client";
import SearchField from "../Filters/SearchField";
import CityFilter from "../Filters/CityFilter";
import UsersGrid from "./UsersGrid";
import EditUserModal from "./EditUserModal";
import { useUsers } from "@/hooks/useUsers";
import { useState } from "react";
import type { User } from "@/types/user";

interface UserListProps {
  initialUsers: User[];
}

/**
 * Main Client side component
 * 
 * Responsible for:
 * 1. Initializing the custom hook 
 * 2. Managing locacl UI state
 * 3. Composing dumb components
 * 
 * Pattern: Lifting state up & Composition 
 */
export default function UserList({ initialUsers }: UserListProps) {
  const {
    users,
    uniqueCities,
    setCityFilter,
    setSearchFilter,
    updateUser,
    cityFilter,
  } = useUsers(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  return (
    <main className="relative w-full h-full flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2 mt-3">
        <SearchField setSearchFilter={setSearchFilter} />
        <CityFilter
          cities={uniqueCities as string[]}
          selectedCity={cityFilter}
          setCityFilter={setCityFilter}
        />
      </div>

      <UsersGrid users={users} setEditingUser={setEditingUser} />

      {editingUser && (
        <EditUserModal
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          updateUser={updateUser}
        />
      )}
    </main>
  );
}
