import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema } from "@/utils/editUserSchema";
import type { EditUser } from "@/utils/editUserSchema";
import type { User, UserChanges } from "@/types/user";

interface EditingUserModalProps {
  editingUser: User;
  setEditingUser: (user: null) => void;
  updateUser: (user: User, changes: UserChanges) => void;
}

export default function EditUserModal({
  editingUser,
  setEditingUser,
  updateUser
}: EditingUserModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUser>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      ...editingUser,
      city: editingUser.address.city
    }
  });

  const onSubmit = (changes: EditUser) => {
    updateUser(editingUser, changes);
    setEditingUser(null);
  };

  const onClose = () => {
    setEditingUser(null);
  };

  return (
    <div
      className={`fixed w-full h-full inset-0 flex justify-center items-center z-10 bg-black/20`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col gap-2 p-5 rounded-xl bg-white"
      >
        <button
          type="button"
          className="absolute -top-0.5 right-2 text-red-500 hover:bg-gray-100 hover:text-red-600 rounded-full px-2 py-0.5"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-xl px-1">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="John Shepard"
            className="text-xl outline-0 border border-gray-400 rounded-full px-2 py-1"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl px-1">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            placeholder="exmaple@email.com"
            className="text-xl outline-0 border border-gray-400 rounded-full px-2 py-1"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-xl px-1">
            City
          </label>
          <input
            {...register("city")}
            type="text"
            name="city"
            placeholder="Kiev"
            className="text-xl outline-0 border border-gray-400 rounded-full px-2 py-1"
          />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="text-xl border border-gray-400 rounded-full bg-green-200 hover:bg-green-300"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
