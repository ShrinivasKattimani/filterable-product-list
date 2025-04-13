import { formatCurrency } from "../utils/formatters";

type ProductRowProps = {
  name: string;
  price: number;
  stocked: boolean;
};

export default function ProductRow({ name, price, stocked }: ProductRowProps) {
  return (
    <tr
      className={`${
        stocked
          ? "text-gray-900 dark:text-gray-100"
          : "text-red-600 dark:text-red-400"
      } border-b border-gray-200 dark:border-gray-700`}
    >
      <td className="x-4 py-2 text-left">{name}</td>
      <td className="px-4 py-2 text-right">{formatCurrency(price, "INR")}</td>
    </tr>
  );
}
