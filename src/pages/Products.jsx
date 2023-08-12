import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Products = () => {
  const [showData, setShowData] = useState([]);
  const [addItem, setAddItem] = useState(false);
  const { allData, addItemFunction } = useContext(DataContext);
  const [depatment, setDepatment] = useState("All Department");
  const [stockBox, setStockBox] = useState(false);
  const [sort, setSort] = useState("Name");

  // add item
  const [deptAdd, setDeptAdd] = useState("kitchen");
  const [nameAdd, setNameAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");
  const [priceAdd, setPriceAdd] = useState("");
  const [stockAdd, setStockAdd] = useState("");
  const [skuAdd, setSKUAdd] = useState("");
  const [supplierAdd, setSupplierAdd] = useState("");
  const [deliveredAdd, setDeliveredAdd] = useState("");
  const [urlAdd, setURLAdd] = useState("");

  useEffect(() => {
    setShowData([...allData]);
  }, [allData]);

  const handleDepartmentChange = (e) => {
    setDepatment(e.target.value);
    const selectedValue = e.target.value.toLowerCase();
    if (
      selectedValue === "clothing" ||
      selectedValue === "kitchen" ||
      selectedValue === "toys"
    ) {
      const filter = [...allData].filter(
        ({ department }) =>
          department.toLowerCase() === e.target.value.toLowerCase()
      );
      setShowData([...filter]);
    } else {
      setShowData([...allData]);
    }
  };

  const handleStockChange = (value) => {
    setStockBox(value);
    if (value === true) {
      const lowStock = [...showData].filter(({ stock }) => stock < 10);
      console.log("low", lowStock);
      setShowData(lowStock);
    } else {
      if (
        depatment === "clothing" ||
        depatment === "kitchen" ||
        depatment === "toys"
      ) {
        const filter = [...allData].filter(
          ({ department }) =>
            department.toLowerCase() === e.target.value.toLowerCase()
        );
        setShowData([...filter]);
      } else {
        setShowData([...allData]);
      }
    }
  };

  const handleSortChange = (e) => {
    const selectedSort = e.target.value.toLowerCase();
    setSort(e.target.value);

    const sortedData = [...showData].sort((a, b) => {
      if (selectedSort === "name") {
        return a.name.localeCompare(b.name);
      } else if (selectedSort === "price") {
        return a.price - b.price; // Numerical comparison
      } else if (selectedSort === "stock") {
        return a.stock - b.stock; // Numerical comparison
      }
      // If no sorting option is selected, return 0 to keep the order unchanged
      return 0;
    });

    setShowData(sortedData);
  };

  // adding item

  const handleAddDept = (e) => {
    console.log("add dept", e.target.value);
    setDeptAdd(e.target.value);
  };

  const handleAddName = (e) => {
    console.log("add dept", e.target.value);
    setNameAdd(e.target.value);
  };

  const handleAddDesc = (e) => {
    console.log("add dept", e.target.value);
    setDescAdd(e.target.value);
  };

  const handleAddItemFunction = (
    deptAdd,
    nameAdd,
    descAdd,
    priceAdd,
    stockAdd,
    skuAdd,
    supplierAdd,
    deliveredAdd,
    urlAdd
  ) => {
    console.log(
      "changed for add itenm",
      deptAdd,
      nameAdd,
      descAdd,
      priceAdd,
      stockAdd,
      skuAdd,
      supplierAdd,
      deliveredAdd,
      urlAdd
    );
    addItemFunction({
      department:deptAdd,
      name:nameAdd,
      description:descAdd,
      price:priceAdd,
      stock:stockAdd,
      sku:skuAdd,
      supplier:supplierAdd,
      delivered:deliveredAdd,
      imageUrl:urlAdd}
    );
  };
  return (
    <>
      <div className="flex relative">
        {addItem && (
          <div className=" absolute top-0 w-full h-[100%] bg-white flex items-start justify-center ">
            <div className="bg-white h-[100%] w-[60%]">
              <button
                onClick={() => setAddItem(!addItem)}
                className="text-xl px-3 py-1 bg-blue-600 text-white rounded-lg flex items-center justify-center "
              >
                Cancel
              </button>

              <div className="flex justify-center items-center  flex-col">
                {/* dept */}
                <div className=" w-[50%]">
                  <p>Department:</p>
                  <select
                    className="w-[100%] border-2 border-bgPrimary px-2 rounded-md"
                    value={deptAdd}
                    onChange={(e) => handleAddDept(e)}
                  >
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                  </select>
                </div>

                {/* name */}
                <div className=" w-[50%] my-2">
                  <p>Name:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => handleAddName(e)}
                  />
                </div>

                {/* desc */}
                <div className=" w-[50%] my-2">
                  <p>Description:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => handleAddDesc(e)}
                  />
                </div>

                {/* price */}

                <div className=" w-[50%] my-2">
                  <p>Price:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => setPriceAdd(e.target.value)}
                  />
                </div>

                {/* stock */}
                <div className=" w-[50%] my-2">
                  <p>Stock:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => setStockAdd(e.target.value)}
                  />
                </div>

                {/* SKU */}
                <div className=" w-[50%] my-2">
                  <p>SKU:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => setSKUAdd(e.target.value)}
                  />
                </div>

                {/* {/* supplier */}
                <div className=" w-[50%] my-2">
                  <p>Supplier:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => setSupplierAdd(e.target.value)}
                  />
                </div>

                {/* deli */}
                <div className=" w-[50%] my-2">
                  <p>Delivered:</p>
                  <input
                    type="text"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => setDeliveredAdd(e.target.value)}
                  />
                </div>

                {/* iamgeurl */}
                <div className=" w-[50%] my-2 mb-20">
                  <p>Image URL:</p>
                  <input
                    type="link"
                    className="w-[100%] border-2 p-2"
                    onChange={(e) => setURLAdd(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  setAddItem(!addItem);
                  handleAddItemFunction(
                    deptAdd,
                    nameAdd,
                    descAdd,
                    priceAdd,
                    stockAdd,
                    skuAdd,
                    supplierAdd,
                    deliveredAdd,
                    urlAdd
                  );
                }}
                className="text-xl my-3 px-3 py-1 bg-green-400 text-white rounded-lg flex items-center justify-center "
              >
                Update
              </button>
            </div>
          </div>
        )}
        <Navbar />
        <div className="w-[100%] h-full ">
          <div className="flex justify-between  py-4 px-8">
            <p className="text-3xl font-semibold">Products</p>

            {/* department filter */}
            <div className=" flex justify-center gap-2">
              <h3 className="text-xl">Department:</h3>
              <select
                className="border-2 border-bgPrimary px-2 rounded-md "
                value={depatment}
                onChange={(e) => handleDepartmentChange(e)}
              >
                <option value="AllDepartment">All Department</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Clothing">Clothing</option>
                <option value="Toys">Toys</option>
              </select>
            </div>

            {/*  low stock checkbox*/}
            <div className=" w-[15%] flex justify-center items-center  ">
              <p className="text-xl">Low Stock: </p>
              <input
                className="cursor-pointer ml-1 mt-1"
                type="checkbox"
                checked={stockBox}
                onChange={() => {
                  handleStockChange(!stockBox);
                  setStockBox(!stockBox);
                }}
              />{" "}
            </div>

            {/* drop down sort */}

            <div className=" flex justify-center gap-2">
              <h3 className="text-xl">Sort:</h3>
              <select
                className="border-2 border-bgPrimary px-2 rounded-md  "
                value={sort}
                onChange={(e) => handleSortChange(e)}
              >
                <option value="Name">Name</option>
                <option value="Price">Price</option>
                <option value="Stock">Stock</option>
              </select>
            </div>

            {/* add new item */}

            <button
              onClick={() => setAddItem(!addItem)}
              className="text-xl px-3 py-1 bg-blue-600 text-white rounded-lg items-center justify-center "
            >
              Add new Item
            </button>
          </div>

          {/* products */}

          <div className="pt-16  my-2 mx-2">
            <div className=" flex justify-between gap-0">
              <div className="w-[25%] pl-4">
                <p>Image</p>
              </div>
              <div className=" flex justify-start items-center min-w-[15%]">
                Name
              </div>
              <div className=" flex justify-start items-center min-w[30%]">
                Desciption
              </div>
              <div className=" flex justify-start items-center min-w-[10%] pl-[250px]">
                Price
              </div>
              <div className=" flex justify-start items-center min-w-[10%] pl-[100px]">
                Stock
              </div>
              <div className=" flex justify-start items-center min-w-[10%] pl-6">
                Supplier
              </div>
            </div>

            {/* product */}
            {showData.length === 0 ? (
              <div>
                <p>No low items</p>
              </div>
            ) : (
              showData.map((item) => (
                <div key={item.id} className="flex justify-between h-[250px]">
                  <div className="border-2 w-[25%] h-[250px]">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <Link
                    to={`/products/${item.name}`}
                    className="underline underline-offset-2 text-purple-700 flex items-center justify-center border-2 w-[15%]"
                  >
                    <p>{item.name}</p>
                  </Link>
                  <div className="flex items-center justify-center border-2 w-[30%]">
                    {item.description}
                  </div>
                  <div className="flex items-center justify-center border-2 w-[10%] ">
                    {item.price}
                  </div>
                  <div className="flex items-center justify-center border-2 w-[10%] ">
                    {item.stock}
                  </div>
                  <div className="flex items-center justify-center border-2 w-[10%] ">
                    {item.supplier}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
