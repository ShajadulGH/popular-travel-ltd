const Form = (props) => {
  const clickHandler = () => {
    props.search();
  };
  return (
    <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="">
          <select className="border p-2 rounded">
            <option value="">Round-trip</option>
            <option value="">One-way</option>
            <option value="">Multy-city</option>
          </select>
        </div>
        <div className="pt-6 md:pt-0 md:pl-6">
          <select className="border p-2 rounded">
            <option value="">4 Passangers</option>
            <option value="">3 Passangers</option>
            <option value="">2 Passangers</option>
          </select>
        </div>
        <div className="pt-6 md:pt-0 md:pl-6">
          <select className="border p-2 rounded">
            <option value="">Economy</option>
            <option value="">Business className</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 border border-gray-200 p-2 rounded">
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <input
              type="text"
              placeholder="LHR"
              className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <input
              type="text"
              placeholder="CDG"
              className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
            />
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <input
              type="date"
              placeholder="Date"
              className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
            />
          </div>

          <div className="flex border rounded bg-gray-300 items-center ">
            <select className="bg-gray-300 w-full max-w-full focus:outline-none text-gray-700">
              <option value="" hidden disabled selected>
                Day -
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <select className="bg-gray-300 w-full max-w-full focus:outline-none text-gray-700">
              <option value="" hidden disabled selected>
                Day +
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <select className="bg-gray-300 w-full max-w-full focus:outline-none text-gray-700">
              <option value="">Anytime</option>
              <option value="">---</option>
              <option value="">---</option>
            </select>
          </div>

          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <select className="bg-gray-300 w-full max-w-full focus:outline-none text-gray-700">
              <option value="">ADT</option>
              <option value="">---</option>
              <option value="">---</option>
            </select>
          </div>
          <div className="flex border rounded bg-gray-300 items-center p-2 ">
            <select className="bg-gray-300 w-full max-w-full focus:outline-none text-gray-700">
              <option value="">1</option>
              <option value="">---</option>
              <option value="">---</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={clickHandler}
          className="p-2 border w-1/4 rounded-md bg-teal-400 text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Form;
