"use client";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import useSWR, { mutate } from "swr";

import ModalDelete from "./ModalDelete";

const API = process.env.NEXT_PUBLIC_API;

const fetcher = (url) => fetch(url).then((res) => res.json());

const TableMap = () => {
  const [hidden, setHidden] = useState("");
  const { user, error } = useUser();
  const url = `${API}?userEmail=${user?.email}`;

  const { data: dataAll, isLoading, mutate } = useSWR(url, fetcher);

  return (
    <>
      <table className="border border-collapse border-slate-500 w-full max-w-10/12 my-9">
        <thead className="dark:bg-slate-900 text-gray-800 dark:text-gray-100">
          <tr>
            <th
              width="5%"
              className="border border-slate-500 dark:border-gray-700 p-2"
            >
              STT
            </th>
            <th className="border border-slate-500 dark:border-gray-700">
              Tên
            </th>
            <th
              width="30%"
              className="border border-slate-500 dark:border-gray-700 p-2 "
            >
              Thời gian
            </th>
            <th
              width="15%"
              colSpan={2}
              className="border border-slate-500 dark:border-gray-700 text-center py-2"
            >
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="dark:bg-slate-800 text-gray-500 dark:text-gray-400">
          {isLoading ? (
            <tr>
              <td colSpan={10} className="text-center py-2">
                <span className="text-gray-500 dark:text-gray-400">
                  Loading...
                </span>
              </td>
            </tr>
          ) : (
            <>
              {dataAll?.length ? (
                <>
                  {dataAll?.map(({ id, title, created_at }, i) => (
                    <tr key={i}>
                      <td className="border border-slate-600 p-2 text-center">
                        {i + 1}
                      </td>
                      <td className="border border-slate-600 p-2">{title}</td>
                      <td className="border border-slate-600 p-2">
                        {created_at}
                      </td>
                      <td className="border border-slate-600 p-2">
                        <div className="flex justify-center gap-3">
                          <a href={`/my-mindmap/${id}`} className="">
                            <i className="fa-solid fa-pen-to-square text-yellow-600"></i>
                          </a>
                          <button onClick={() => setHidden(id)}>
                            <i className="fa-solid fa-trash text-red-600"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td colSpan={10}>
                    <p className="text-center p-2">Không có dữ liệu</p>
                  </td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
      {hidden && (
        <ModalDelete id={hidden} onHidden={() => setHidden("")} api={url} />
      )}
    </>
  );
};

export default TableMap;
