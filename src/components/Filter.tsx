import { useState, useEffect } from "react";
import { FilterValue } from "../types/filter";

export default function Filter({
  onFilter,
}: {
  onFilter: (filterValue: FilterValue) => void;
}) {
  const [searchString, setSearchString] = useState<string>("");
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilter({ searchString, showOnlyAvailable });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchString]);

  useEffect(() => {
    onFilter({ searchString, showOnlyAvailable });
  }, [showOnlyAvailable]);

  const handleSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOnlyAvailable(e.target.checked);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.type === "checkbox") {
  //     setShowOnlyAvailable(e.target.checked);
  //   } else {
  //     setSearchString(e.target.value);
  //   }
  // };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 bg-white dark:bg-gray-800 p-4 rounded shadow"
    >
      <input
        type="text"
        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search product"
        value={searchString}
        onChange={handleSearchStringChange}
      />

      <div className="flex justify-center space-x-2">
        <input
          type="checkbox"
          id="stock-filter"
          className="h-4 w-4 flex-shrink-0 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
          checked={showOnlyAvailable}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="stock-filter" className="text-sm whitespace-nowrap">
          Only show products in stock
        </label>
      </div>
    </form>
  );
}
