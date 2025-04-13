import { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import React from "react";
import { Product } from "../types/product";
import { FilterValue } from "../types/filter";

export default function ProductTable({
  products,
  filter,
}: {
  products: Product[];
  filter: FilterValue;
}) {
  type GroupedProduct = [string, Product[]];

  let [groupedProducts, setGroupedProducts] = useState<GroupedProduct[]>([]);

  const filterProducts = () => {
    return products.filter((product: Product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes((filter.searchString || "").toLowerCase());

      const inStockMatch = !filter.showOnlyAvailable || product.stocked;

      return nameMatch && inStockMatch;
    });
  };

  const groupProducts = (products: Product[]) => {
    return Object.entries(
      Object.groupBy(products, ({ category }: { category: string }) => category)
    ) as GroupedProduct[];
  };

  useEffect(() => {
    const filtered: Product[] = filterProducts();
    const grouped: GroupedProduct[] = groupProducts(filtered);
    setGroupedProducts(grouped);
  }, [filter]);

  return (
    <>
      <table className="w-full  border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-100 uppercase tracking-wide">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {groupedProducts.map((productGroup: GroupedProduct) => {
            return (
              <React.Fragment key={productGroup[0]}>
                <ProductCategory category={productGroup[0]} />
                {productGroup[1].map((product: Product) => {
                  return (
                    <ProductRow
                      key={product.name}
                      name={product.name}
                      price={product.price}
                      stocked={product.stocked}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
