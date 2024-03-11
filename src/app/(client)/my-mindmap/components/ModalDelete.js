import { toast } from "react-toastify";
import { mutate } from "swr";

import { handleDeleteMindmap } from "~/serverMindmap/serverMindmap";

const ModalDelete = ({ id, onHidden, api }) => {
  const handleClick = async (_id) => {
    const result = await handleDeleteMindmap(_id);

    if (!result) {
      toast.error("đã có lỗi xảy ra, vui lòng thử lại");
      onHidden();
      return;
    }

    mutate(api);
    toast.success(`Xóa mindmap thành công`);
    onHidden();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-start z-10">
      <div
        className="fixed inset-0 bg-[#21252979]"
        onClick={() => onHidden()}
      ></div>
      <div className="max-w-[500px] w-full border border-slate-500 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 z-10 mt-28">
        <div className="flex justify-between border-b border-slate-300 dark:border-gray-700 p-4">
          <h1 className="text-xl font-medium text-gray-800 dark:text-gray-100">
            Modal Delate
          </h1>
          <button className="text-xl" onClick={() => onHidden()}>
            <i className="fa-regular fa-circle-xmark text-gray-500 dark:text-gray-400"></i>
          </button>
        </div>
        <div className="p-4 border-b border-slate-300 dark:border-gray-700 pb-2">
          <p className="text-base mb-4 text-gray-500 dark:text-gray-400">
            Bạn có chắc chắn muốn xóa?
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ID Mindmap: <span className="italic">{id}</span>
          </span>
        </div>
        <div className="p-4 flex justify-end items-center gap-3">
          <button
            className="bg-red-500 text-white rounded-md py-2 px-3"
            onClick={() => onHidden()}
          >
            Hủy
          </button>
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            onClick={() => handleClick(id)}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
