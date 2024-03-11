"use client";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@auth0/nextjs-auth0/client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  handleCreateMindmap,
  handleUpdateMindmap,
} from "~/serverMindmap/serverMindmap";

const MindmapHeader = ({ mapID, titleDetail, describeDetail }) => {
  const { user } = useUser();
  const btnRef = useRef();
  const email = user?.email;
  const [form, setForm] = useState({
    title: titleDetail,
    desc: describeDetail,
  });
  const routers = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    btnRef.current.disabled = true;
    const created_at = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Jakarta",
    });

    let data = JSON.parse(localStorage.getItem("dataMindmap"));
    data = {
      // id: mapID || uuidv4(),
      userEmail: email,
      ...data,
      title: form.title,
      describe: form.desc,
      created_at,
    };

    let result;

    if (mapID) {
      //Update
      result = await handleUpdateMindmap(mapID, data);
      if (result) {
        toast.success("chỉnh sửa thành công");
        localStorage.removeItem("dataMindmap");

        setTimeout(() => {
          routers.push("/my-mindmap");
        }, 800);
        return () => {
          btnRef.current.disabled = false;
          clearTimeout();
        };
      }
      toast.error("chỉnh sửa thất bại");
      return (btnRef.current.disabled = true);
    }

    //Create
    data.id = uuidv4();
    result = await handleCreateMindmap(data);

    if (result) {
      localStorage.removeItem("dataMindmap");
      toast.success("tạo mới thành công");

      setTimeout(() => {
        routers.push("/my-mindmap");
      }, 800);

      return () => {
        btnRef.current.disabled = false;
        clearTimeout();
      };
    }
    toast.error("tạo mới thất bại");
    return (btnRef.current.disabled = false);
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="mb-10">
      <div className="flex justify-between items-center px-4">
        <div>
          <input
            type="text"
            className="block text-3xl md:text-4xl font-medium text-gray-800 dark:text-gray-100 bg-transparent my-2 px-2 focus:outline-0"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="desc"
            className="text-gray-800 dark:text-gray-100 bg-transparent px-2 mt-2 w-full focus:outline-0"
            value={form.desc}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            className="bg-green-600 text-white text-sm p-2 rounded-md hover:bg-green-500 disabled:opacity-75"
            ref={btnRef}
          >
            <i className="fa-solid fa-save"></i>
            <span className="ml-2">Lưu thay đổi</span>
          </button>
          <a
            className="bg-blue-600 text-white text-sm  ml-2 p-2 rounded-md hover:bg-blue-500"
            target="_blank"
            href="#"
          >
            <i className="fa-solid fa-share"></i>
            <span className="ml-2">Chia sẻ</span>
          </a>
        </div>
      </div>
    </form>
  );
};

export default MindmapHeader;
