import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div id="experience">
      <div className="container">
        <div id="experience-container">
          <h2>Experience</h2>
          <div className="list">
            <ExperienceItem type={"Typescript"} time={"1 year"} />
            <ExperienceItem
              type={"Javascript"}
              time={"5 years"}
              customTitle={"HTML, CSS, JS"}
              description={"+ jQuery, Sass, TailwindCSS"}
            />
            <ExperienceItem
              type={"MongoDB"}
              time={"3 years"}
              description={"+ MySQL"}
            />
            <ExperienceItem
              type={"react"}
              customTitle={"React, Next.JS"}
              time={"5 years"}
              description={"+ React Native"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
