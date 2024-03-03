import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  const handleStyle = {
    // background: "#ff338f",
    background: "#289b56",
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={handleStyle} />
      {/* xóa edges */}
      {/* <EdgeLabelRenderer>
        <button
          onClick={() => setEdges((edges) => edges.filter((e) => e.id !== id))}
        >
          delete
        </button>
      </EdgeLabelRenderer> */}
    </>
  );
}
