import { useState } from "react";
import Filter from "./Filter";
import ProductTable from "./ProductTable";
import { Product } from "../types/product";
import { FilterValue } from "../types/filter";

export default function FilterableProductList({
  products,
}: {
  products: Product[];
}) {
  const [filterValue, setFilterValue] = useState<FilterValue>({
    searchString: "",
    showOnlyAvailable: false,
  });

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Filter onFilter={setFilterValue} />
          <ProductTable products={products} filter={filterValue} />
        </div>
      </div>
    </>
  );
}
