"use client";
import React, {
  useCallback,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import ReactFlow, {
  MiniMap, //Bản đồ nhỏ.
  Controls, //Công cụ tiện ích.
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from "reactflow";

import "reactflow/dist/style.css";
import "./style.css";

import CustomEdge from "../components/CustomEdges";
import CustomNodeChild from "../components/CustomNodeChild";

let nodeID = 1;
let nodeIdEdit;

const getId = (ID_END) => {
  if (ID_END) {
    return `${+ID_END + nodeID++}`;
  }
  return `${nodeID++}`;
};

const nodeTypes = {
  nodeChild: CustomNodeChild,
};

const edgeTypes = {
  "custom-edge": CustomEdge,
};

const Mindmaps = ({ mapID, nodeDetail, edgeDetail }) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null); //trả về id của node vừa tác động
  const [nodes, setNodes, onNodesChange] = useNodesState(nodeDetail);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgeDetail);
  const { screenToFlowPosition } = useReactFlow();

  //Lấy id của node cuối cùng khi sửa
  if (mapID) {
    nodeIdEdit = nodeDetail[nodeDetail.length - 1]["id"];
  }

  const onConnect = useCallback((params) => {
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
    // setEdges((eds) =>
    //   addEdge({ ...params, style: { stroke: "#ff338f" } }, eds)
    // );
  }, []);

  const onConnectStart = useCallback((params, { nodeId }) => {
    connectingNodeId.current = nodeId;
    // setEdges(
    //   (eds) => addEdge(params, eds)
    //   // addEdge({ ...params, style: { stroke: "#ff338f" } }, eds)
    // );
  }, []);

  // const onConnect2 = useCallback((params) => {
  //   connectingNodeId.current = null;
  //   // setEdges((eds) => addEdge(params, eds));
  //   setEdges((eds) =>
  //     addEdge({ ...params, style: { stroke: "#ff338f" } }, eds)
  //   );
  // }, []);

  // const onConnectStart2 = useCallback((params, { nodeId }) => {
  //   connectingNodeId.current = nodeId;
  //   setEdges(
  //     (eds) => addEdge(params, eds)
  //     // addEdge({ ...params, style: { stroke: "#ff338f" } }, eds)
  //   );
  // }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = getId(nodeIdEdit);
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          type: "nodeChild",
          data: { label: `Text ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectingNodeId.current,
            target: id,
            // style: { stroke: "#ff338f" },
          })
        );
      }
    },
    [screenToFlowPosition]
    // [screenToFlowPosition, setEdges, setNodes]
  );

  useLayoutEffect(() => {
    const local = JSON.parse(localStorage.getItem("dataMindmap"));
    // console.log("useLayoutEffect", local);
    // const { nodes, edges } = local;

    // console.log(nodes);
    // console.log(edges);
    setNodes(local?.nodes);
    setEdges(local?.edges);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataMindmap", JSON.stringify({ nodes, edges }));
  }, [nodes, edges]);

  return (
    <div
      className="py-5 w-full h-500 wrapper"
      ref={reactFlowWrapper}
      style={{ height: "600px" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange} //di chuyển nodes.
        onEdgesChange={onEdgesChange} //di chuyển edges.
        onConnect={onConnect} //Kết nối các nodes
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes} //Custom nodes.
        edgeTypes={edgeTypes}
        fitView
        nodeOrigin={[0.5, 0]}
        fitViewOptions={{ padding: 2 }}
      >
        <MiniMap />
        <Controls />
        <Background
          variant="cross"
          gap={20}
          size={2}
          className="bg-gray-500"
          // style={{ backgroundColor: "gray" }}
        />
      </ReactFlow>
    </div>
  );
};

const MindmapBody = (props) => (
  <ReactFlowProvider>
    <Mindmaps {...props} />
  </ReactFlowProvider>
);

export default MindmapBody;
