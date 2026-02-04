import type { User } from "@/types/user";

interface UserCardProps {
  user: User;
  setEditingUser: (user: User) => void;
}

export default function UserCard({ user, setEditingUser }: UserCardProps) {
  return (
    <div className="flex flex-col  gap-2 bg-gray-300 rounded-xl p-3">
      <h1>
        Name: <br /> {user.name}
      </h1>
      <p>
        Email: <br />
        {user.email ? user.email : "Unknown email"}
      </p>
      <p>
        City: <br />
        {user.address.city ? user.address.city : "Unknown city"}
      </p>
      <button
        className="bg-yellow-200 w-full p-1 rounded-xl"
        onClick={() => {
          setEditingUser(user);
        }}
      >
        Edit
      </button>
    </div>
  );
}
