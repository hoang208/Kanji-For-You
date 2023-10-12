export default function Word(props) {
  return (
      <div className="info wordInfo">
        <div className="detailsLabel">
          <p className="details word">{props.variants}</p>
        </div>
        <div className="detailsInfo">
          {props.meanings.slice(0, 3).map((meaning, i) => (
            <p className="definitions" key={i}>
              {meaning}
            </p>
          ))}
        </div>
      </div>
  );
}
