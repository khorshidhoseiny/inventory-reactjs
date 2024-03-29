
const Filter = ({
  sort,
  search,
  onSort,
  selectedCategory,
  onSelect,
  onSearch,
  categories,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          value={search}
          onChange={onSearch}
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          onChange={onSort}
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
        >
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          Category
        </label>
        <select
          name="sort-products"
          onChange={onSelect}
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={selectedCategory}

        >
          <option
            className="bg-slate-500 text-slate-300"
            value=""
          >
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className="bg-slate-500 text-slate-300"
                key={category.id}
                value={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
