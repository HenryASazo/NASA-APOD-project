export default function Main(props) {
  const { data } = props;

  if (!data) {
    return <div>Loading...</div>; // Show a loading message
  }

  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}
