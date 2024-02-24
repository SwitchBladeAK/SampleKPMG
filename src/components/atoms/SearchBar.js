import React, { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import KPMGContext from "../../context/SampleContext";

const SearchBar = ({
  tempAdvancedFilterState,
  handleSearch,
  updateOperator,
  operatorOptions,
  updateValue,
  clearAdvancedFilter,
  searchFilter,
  handleAdvancedFilter,
}) => {
  const [advancedModal, setAdvancedModal] = useState(false);

  const toggleAdvancedModal = () => {
    setAdvancedModal((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-auto "
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="w-[235px] relative border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <input
            type="search"
            id="default-search"
            className="block w-[200px] p-2 ps-10 text-sm text-gray-900 border border-none rounded-l-lg"
            placeholder="Search keyword"
            required=""
            value={searchFilter}
            onChange={(e) => handleSearch(e)}
          />

          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <div
            className="absolute inset-y-0 right-0 flex items-center p-1"
            onClick={toggleAdvancedModal}
            style={{ cursor: "pointer" }}
          >
            <RiArrowDropDownLine size={"25px"} color="grey" />
          </div>
        </div>
      </form>

      {/* Advanced Search Modal */}
      <div
        className={`${
          advancedModal ? "flex " : "hidden"
        } fixed inset-0 items-center justify-center z-50 bg-gray-800 bg-opacity-50`}
      >
        <form className="w-[60%] bg-white rounded-lg p-6">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="w-full relative border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-none rounded-t-lg"
              placeholder="Choose the filters to be applied"
              required=""
              onChange={(e) => handleSearch(e)}
              value={searchFilter}
            />

            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-hidden">
            <thead className="text-xs text-white uppercase bg-[#4856BEF5] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className={`px-6 py-3 `}>
                  Column Name
                </th>
                <th scope="col" className={`px-6 py-3 `}>
                  Operator
                </th>
                <th scope="col" className={`px-6 py-3 `}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {tempAdvancedFilterState.map(
                ({ col: columnName, value, operator }, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className={`w-[30%] flex-none px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white `}
                    >
                      {columnName}
                    </th>
                    <td className={`w-[300px] flex-grow px-6 py-4 `}>
                      <select
                        className="block w-[100%] p-4 text-sm border rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) =>
                          updateOperator(columnName, e.target.value)
                        }
                        value={operator || ""}
                      >
                        <option value="">Select an operator</option>
                        {operatorOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className={`flex gap-3 px-6 py-4 `}>
                      {operator?.includes("empty") ? (
                        <></>
                      ) : (
                        <input
                          type="text"
                          className="w-full px-4 py-3 border rounded-md"
                          placeholder="Enter text"
                          disabled={!operator}
                          value={value || ""}
                          onChange={(e) =>
                            updateValue(columnName, e.target.value)
                          }
                        />
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* Modal footer */}
          <div className="ps-4 py-3 sm:ps-6 flex flex-row-reverse gap-5">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-[#4856BE] text-white rounded-md hover:bg-blue-800"
              onClick={() => {
                handleAdvancedFilter();
                toggleAdvancedModal();
              }}
            >
              Search
            </button>

            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
              onClick={() => {
                clearAdvancedFilter();
                toggleAdvancedModal();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
