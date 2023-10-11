export default function DictionaryItem(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <h1 className="cardTitle">{props.kanji}</h1>
      </div>
      <button className="cardBtn">View Kanji</button>
    </div>
  );
}
