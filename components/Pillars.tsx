import Pillar from "./Pillar";

const Pillars = () => {
  return (
    <div className="pillars-container">
      <Pillar type={"javascript"} />
      <Pillar type={"react"} />
      {/* <Pillar type={"nextjs"} /> */}
      <Pillar type={"typescript"} />
      <Pillar type={"mongodb"} />
    </div>
  );
};

export default Pillars;
