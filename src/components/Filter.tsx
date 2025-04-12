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
    <form>
      <input
        type="text"
        placeholder="Product name"
        value={searchString}
        onChange={(e) => handleSearchStringChange(e)}
      />
      <input
        type="checkbox"
        id="stock-filter"
        checked={showOnlyAvailable}
        onChange={(e) => handleCheckboxChange(e)}
      ></input>{" "}
      <label htmlFor="stock-filter">Only show products in stock</label>
    </form>
  );
}
