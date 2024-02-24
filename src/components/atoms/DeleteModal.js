// DeleteModal.js
import React, { useContext } from "react";
import KPMGContext from "../../context/SampleContext";

const DeleteModal = ({ isOpen, onClose, onDelete, itemName }) => {
  const { pageLabels, setPageLabels } = useContext(KPMGContext);

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    // Modal container
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
              {`Delete ${pageLabels.name}`}
            </h3>
          </div>

          {/* Modal body */}
          <div className="p-6">
            {/* Body content */}
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                {`Are you sure you want to delete the ${itemName[0]?.columnName} : `}
                <span className="font-bold">{itemName[0]?.columnValue}</span>?
              </p>
            </div>
          </div>

          {/* Modal footer */}
          <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-red-600 hover:bg-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
              onClick={handleDelete}
            >
              Delete
            </button>
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

export default DeleteModal;
