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
      <Filter onFilter={setFilterValue} />
      <ProductTable products={products} filter={filterValue} />
    </>
  );
}
