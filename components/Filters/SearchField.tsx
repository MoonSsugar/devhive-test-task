import { useUsers } from "@/hooks/useUsers";

interface SearchFiledProps {
  setSearchFilter: (search: string) => void;
}

export default function SearchField({ setSearchFilter}: SearchFiledProps) {
  return (
    <input
      type="text"
      className="w-[300px] px-2 py-1 border border-gray-300 rounded-full outline-0"
      placeholder="Search by name..."
      onChange={(event) => setSearchFilter(event.target.value)}
    />
  );
}
