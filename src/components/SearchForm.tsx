// Funziona senza JavaScript: è un normale form GET verso /cerca.
export function SearchForm({ defaultValue = "", autoFocus = false, id = "q" }: { defaultValue?: string; autoFocus?: boolean; id?: string }) {
  return (
    <form action="/cerca" method="get" role="search" className="search">
      <label htmlFor={id} className="visually-hidden">Cerca una categoria o un prodotto</label>
      <input
        id={id}
        name="q"
        type="search"
        placeholder="Es. friggitrice ad aria, monitor, trapano…"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        autoComplete="off"
        enterKeyHint="search"
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
