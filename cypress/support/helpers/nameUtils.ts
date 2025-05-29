export function assertNamesSorted(
    names: JQuery<HTMLElement>,
    order: "asc" | "desc"
  ) {
    const nameValues = [...names].map(el =>
      el.innerText.trim().toLowerCase()
    );
  
    const sorted = [...nameValues].sort((a, b) =>
      order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
    );
  
    expect(nameValues).to.deep.equal(sorted);
  }
  