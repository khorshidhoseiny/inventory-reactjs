const ProductList = ({ products, categoryList, setProductList }) => {
  const findCategory = (CategoryId) => {
    return categoryList.find((c) => c.id === parseInt(CategoryId)).title;
  };
  const deleteHandler = (ProductId) => {
    const filteredProduct = products.filter(
      (p) => p.id !== parseInt(ProductId)
    );
    setProductList(filteredProduct);
  };

  return (
    <div>
      <h1 className="text-white">ProductList</h1>
      <div className="overflow-x-auto">
      {products.map((product) => {
        return (
          <div key={product.id} className="flex items-center justify-between mb-2 w-full min-w-[400px]">
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="block p-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-xl">
                {findCategory(product.categoryId)}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button
                onClick={() => deleteHandler(product.id)}
                className="delete-product px-3 py-0.5 border border-red-500 text-red-500 rounded-xl"
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default ProductList;
