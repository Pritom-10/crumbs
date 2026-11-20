export default function SearchBar({ value, onChange, id = 'search' }) {
  return (
    <label className="search" htmlFor={id}>
      <span aria-hidden="true">🔍</span>
      <input id={id} type="search" placeholder="Search breads, cakes, cookies…" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}