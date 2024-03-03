import { headers } from "next/headers";
import { getMindmapAllByEmail } from "~/serverMindmap/serverMindmap";
import MymapCreate from "../create/page";

const mindmapAPI = async ({ params: { id: mindID } }) => {
  const userEmail = headers().get("x-api-key");

  const dataAll = await getMindmapAllByEmail(userEmail);
  const data = dataAll.find(({ id }) => id === mindID);

  return <MymapCreate props={data} />;
};

export default mindmapAPI;
