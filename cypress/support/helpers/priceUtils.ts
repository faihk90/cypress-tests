export function assertPricesSorted(prices: JQuery<HTMLElement>, order: "asc" | "desc") {
    const priceValues = [...prices].map(el =>
      parseFloat(el.innerText.replace('$', ''))
    );
    const sorted = [...priceValues].sort((a, b) =>
      order === "asc" ? a - b : b - a
    );
  
    expect(priceValues).to.deep.equal(sorted);
  }
  