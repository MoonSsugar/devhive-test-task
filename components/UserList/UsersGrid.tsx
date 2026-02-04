"use client";
import UserCard from "./UserCard";
import type { User } from "@/types/user";

interface UserGridProps {
  users: User[];
  setEditingUser: (user: User) => void;
}

export default function UsersGrid({ users, setEditingUser}: UserGridProps) {
  if (!users || users.length === 0)
    return (
      <div className="flex justify-center items-center">No filter users</div>
    );

  return (
    <section className="max-w-[1200px] flex flex-col justify-center items-center mx-auto gap-2">
      <div className="grid grid-cols-4 gap-5">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} setEditingUser={setEditingUser} />;
        })}
      </div>
    </section>
  );
}
