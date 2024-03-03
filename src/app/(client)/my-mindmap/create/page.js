import MindmapHeader from "./MindmapHeader";
import MindmapBody from "./MindmapBody";

const initialNodes = [
  {
    id: "0",
    data: { label: "My mindmap" },
    type: "nodeChild",
    selected: false,
    dragging: false,
    position: { x: 0, y: 50 },
  },
];
const initialEdges = [];

const MymapCreate = ({ props }) => {
  const mapID = props?.id;
  const nodeDetail = props?.nodes ?? initialNodes;
  const edgeDetail = props?.edges ?? initialEdges;
  const titleDetail = props?.title ?? "Mindmap không có tên";
  const describeDetail = props?.describe ?? "Chưa có mô tả";

  return (
    <div className="py-5 mx-auto">
      <MindmapHeader
        mapID={mapID}
        titleDetail={titleDetail}
        describeDetail={describeDetail}
      />
      <MindmapBody
        mapID={mapID}
        nodeDetail={nodeDetail}
        edgeDetail={edgeDetail}
      />
    </div>
  );
};

export default MymapCreate;
