// Renders a heading defined as an array of plain strings and { gold: '...' }
// parts (see src/data/content.js) into React nodes, wrapping gold parts in a
// <span class="gold">. Keeps content.js free of JSX while still letting
// copy control which words get the accent color.
export function renderRichText(parts) {
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      <span key={i}>{part}</span>
    ) : (
      <span key={i} className="gold">
        {part.gold}
      </span>
    ),
  )
}
