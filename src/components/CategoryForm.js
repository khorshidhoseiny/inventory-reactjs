import { useState } from "react";

const CategoryForm = ({setCategoryList}) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  

  const FormToggle = () => {
    setIsShow(!isShow);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryList=(e)=>{
    e.preventDefault();
    const newCategory={...categoryFormData,createdAt:new Date().toISOString(),id:new Date().getTime()}
    setCategoryList((prevState)=>[...prevState,newCategory]);
    setCategoryFormData({title:"",description:""});
  }

  return (
    <section>
      <div
        className={isShow ? "block mb-6" : "hidden mb-6"}
        id="category-wrapper"
      >
        <button
          onClick={FormToggle}
          className="text-xl text-slate-300 font-bold mb-2"
        >
          Add New category
        </button>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              value={categoryFormData.title}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type=" text"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              onClick={addNewCategoryList}
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={
          isShow ? "hidden" : "text-slate-600 text-lg mb-4 font-medium block"
        }
        onClick={FormToggle}
      >
        Add new Category?
      </button>
    </section>
  );
};

export default CategoryForm;
