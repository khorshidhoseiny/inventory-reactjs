import { useState } from "react";

const ProductForm = ({ categoryList,setProductList}) => {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: "",
    categoryId: "",
  });
  

  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProductList((prevState) => [...prevState, newProduct]);
    setProductFormData({ title: "", quantity: "",categoryId:"" });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductFormData({ ...productFormData, [name]: value });
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            value={productFormData.title}
            onChange={changeHandler}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            type="number"
            name="quantity"
            value={productFormData.quantity}
            onChange={changeHandler}
            id="product-quantity"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            name="categoryId"
            id="product-category"
            value={productFormData.categoryId}
            onChange={changeHandler}
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select a category
            </option>
            {categoryList.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            onClick={addNewProduct}
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
