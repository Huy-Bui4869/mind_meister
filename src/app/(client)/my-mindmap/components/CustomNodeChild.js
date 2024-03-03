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
      <div className="d-flex justify-content-center">
        {check ? (
          <input
            id="text"
            name="text"
            onChange={handleChange}
            value={name}
            //class nodrag _ ngăn chặn việc kéo trong trường đầu vào và cho phép chọn văn bản.
            className="nodrag bg-transparent border border-solid border-while rounded outline-0 text-red"
            style={{ textAlign: "center", width: "94%" }}
            autoFocus
          />
        ) : (
          <span>{name}</span>
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
