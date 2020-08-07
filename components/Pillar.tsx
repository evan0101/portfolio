type Props = {
  type: string;
};

const Pillar = (props: Props) => {
  const { type } = props;
  return (
    <div className="pillar">
      <img src={`/pillar_${type || "empty"}.png`}></img>
    </div>
  );
};

export default Pillar;
