const ProductList = ({ products }) => {
  return (
    <div>
      <h1 className="text-white">ProductList</h1>
      {products.map((product) => {
        return (
          <div class="flex items-center justify-between mb-2 w-full min-w-[400px]">
            <span class="text-slate-400">{product.title}</span>
            <div class="flex items-center gap-x-3">
              <span class="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span class="block p-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-xl">
                {product.categoryId}
              </span>
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button class="delete-product px-3 py-0.5 border border-red-500 text-red-500 rounded-xl">
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
