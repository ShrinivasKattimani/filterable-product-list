export default function ProductCategory({ category }: { category: string }) {
  return (
    <tr>
      <th
        colSpan={2}
        className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 px-4 py-2 text-sm font-semibold text-center"
      >
        {category}
      </th>
    </tr>
  );
}
