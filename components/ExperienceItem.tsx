type Props = {
  type: string;
  time: string;
  description?: string;
  customTitle?: string;
};

const ExperienceItem = (props: Props) => {
  const { type, time, description, customTitle } = props;
  return (
    <div className="experience-item">
      <div className="item-icon">
        <img src={`block_${type.toLowerCase()}.png`} />
      </div>
      <div className="item-info">
        <div className="item-title">
          <h4>{customTitle || type}</h4>
          <h5>{time}</h5>
        </div>
        {description && <div className="item-description">{description}</div>}
      </div>
    </div>
  );
};
export default ExperienceItem;
