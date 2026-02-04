"use client";
import { useEffect, useState } from "react";

interface SearchFiledProps {
  setSearchFilter: (search: string) => void;
}

/**
 * Search input with debounce
 * 
 * Implements a 300ms delay to prevent filtering on every keystroke
 * This significantly improves performance on large datasets
 */
export default function SearchField({
  setSearchFilter,
}: SearchFiledProps) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchFilter(inputValue)
    }, 300)

    return () => clearTimeout(debounceTimer);
  }, [inputValue, setSearchFilter]);

  return (
    <input
      type="text"
      className="w-[300px] px-2 py-1 border border-gray-300 rounded-full outline-0"
      placeholder="Search by name..."
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
    />
  );
}
