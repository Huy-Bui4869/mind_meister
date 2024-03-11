"use client";
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { useReactFlow } from "reactflow";

const handleStyle = { left: 10 };

function CustomNodeChild({ id, data, isConnectable }) {
  const { label } = data;
  const [name, setName] = useState(label);
  const [check, setCheck] = useState(false);

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleDbClick = (e) => {
    setCheck(true);
  };

  return (
    <div
      // className="bg-red-600 w-[300px] h-20"
      onDoubleClick={handleDbClick}
      onBlur={() => {
        setCheck(false);
      }}
    >
      {+id !== 0 && (
        <Handle
          type="target"
          position={Position.Top}
          id="a"
          isConnectable={isConnectable}
        />
      )}
      <div className="flex justify-center">
        {check ? (
          <input
            id="text"
            name="text"
            onChange={handleChange}
            value={name}
            //class nodrag _ ngăn chặn việc kéo trong trường đầu vào và cho phép chọn văn bản.
            //  border border-solid border-while  rounded
            className="bg-blue-500 nodrag bg-transparent outline-0 text-gray-800 dark:text-gray-100"
            style={{ textAlign: "center", width: "94%" }}
            autoFocus
          />
        ) : (
          <span className="text-gray-800 dark:text-gray-100">{name}</span>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CustomNodeChild;
