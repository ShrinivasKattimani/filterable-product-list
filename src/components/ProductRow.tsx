import { formatCurrency } from "../utils/formatters";

type ProductRowProps = {
  name: string;
  price: number;
  stocked: boolean;
};

export default function ProductRow({ name, price, stocked }: ProductRowProps) {
  return (
    <tr className={stocked ? "" : "non-stocked"}>
      <td>{name}</td>
      <td>{formatCurrency(price, "INR")}</td>
    </tr>
  );
}
