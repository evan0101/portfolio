import WorkItem from "./WorkItem";

const Work = () => {
  return (
    <div id="work">
      <div className="container">
        <div id="work-container">
          <h2>My Work</h2>
          <div className="list">
            <WorkItem
              projectName={"Nest Networking"}
              startDate={"Jun 2018"}
              endDate={"Feb 2020"}
              description={
                "I developed a landing page and dashboard for Nest Networking to help showcase the features of their service and create a seamless and easy experience for their customers."
              }
              languages={[
                "React",
                "Next.JS",
                "Javascript",
                "HTML5",
                "CSS",
                "Sass",
                "TailwindCSS",
              ]}
              websiteUrl={"https://nestnetworking.com"}
              imageUrl={"NestNetworking.png"}
            />
            <WorkItem
              projectName={"Game Server Website"}
              startDate={"Mar 2020"}
              description={
                "A full stack demo site for a game server with newsfeed and game statistics."
              }
              imageUrl={"Uprising.png"}
              languages={[
                "React",
                "Typescript",
                "HTML5",
                "MongoDB",
                "CSS",
                "Sass",
              ]}
              githubUrl={"GEET"}
              demoUrl={"DEMO"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
