import categories from "./Category";
interface Props {
  onSelectCategory: (category: string) => void;
}
const CategoriesFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">AllCategories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesFilter;
