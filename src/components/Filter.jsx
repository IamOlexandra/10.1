export default function Filter({getFilter}) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={(event) => {getFilter(event)}}/>
    </>
  );
}