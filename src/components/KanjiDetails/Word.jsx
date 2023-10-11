
export default function Word(props) {
  return (
    <div>
        <div>
            <p>{props.variants}</p>
        </div>
      <div >
      {props.meanings.slice(0,3).map((meaning,i) => (
          <p key={i}>{meaning}</p>
        ))}
      </div>
    </div>
  );
}
