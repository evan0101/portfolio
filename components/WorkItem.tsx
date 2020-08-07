type Props = {
  imageUrl?: string;
  projectName: string;
  startDate: string;
  endDate?: string;
  description: string;
  languages: string[];
  githubUrl?: string;
  websiteUrl?: string;
  demoUrl?: string;
};

const WorkItem = (props: Props) => {
  const {
    imageUrl,
    projectName,
    startDate,
    endDate,
    description,
    languages,
    githubUrl,
    websiteUrl,
    demoUrl,
  } = props;

  const displayLanguages = () => {
    const jsx = [];
    languages.map((language) => {
      jsx.push(<div className="language-tag">{language}</div>);
    });
    return jsx;
  };

  return (
    <div className="work-card">
      <img src={imageUrl}></img>
      <div className="item-title">
        <h4>{projectName}</h4>
        <h5>
          {startDate} {endDate && <>- {endDate}</>}
        </h5>
      </div>
      <div className="work-description">{description}</div>
      <div className="work-languages">{displayLanguages()}</div>
      <div className="work-links">
        {githubUrl && <a className="work-link">View on Github</a>}
        {websiteUrl && <a className="work-link">Live Website</a>}
        {demoUrl && <a className="work-link">Live Demo</a>}
      </div>
    </div>
  );
};
export default WorkItem;
