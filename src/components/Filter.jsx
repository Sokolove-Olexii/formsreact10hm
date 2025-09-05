export default function Filter({ value, onChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
