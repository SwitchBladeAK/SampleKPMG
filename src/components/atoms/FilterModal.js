import React, { useState } from "react";
import KPMGContext from "../../context/SampleContext";

const FilterModal = ({
  isOpen,
  onClose,
  filteredColumns,
  setFilteredColumns,
}) => {
  const handleChecked = (e) => {
    setFilteredColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((column) => {
        if (column.col === e.target.value) {
          return { ...column, filtered: !column.filtered };
        }
        return column;
      });

      return updatedColumns;
    });
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 overflow-y-auto z-50`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Modal header */}
          <div className="bg-[#4856BEF5] px-4 py-3 sm:px-6">
            <h3 className="text-lg font-medium text-white" id="modal-headline">
              Select Columns You Want To Filter
            </h3>
          </div>

          {/* Modal body */}
          <div className="flex justify-evenly p-6">
            {filteredColumns.map((column) => (
              <div>
                <input
                  type="checkbox"
                  value={column.col}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleChecked}
                  checked={!column.filtered}
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {column.col}
                </label>
              </div>
            ))}
          </div>

          {/* Modal footer */}
          <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-center">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
