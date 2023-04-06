const tag = [
  { name: "Tag one" },
  { name: "Trend" },
  { name: "Top Coin" },
  { name: "Top grain" },
  { name: "Investment" },
  { name: "Fintech" },
  { name: "Bitcoin" },
];

const colors = [
  "rgba(255, 205, 4, 1)",
  "rgba(0, 136, 255, 1)",
  "rgba(165, 108, 189, 1)",
  "rgba(153, 124, 0, 1)",
  "rgba(255, 184, 184, 1)",
  "rgba(73, 207, 232, 1)",
  "rgba(66, 129, 255, 1)",
];

export default function Tags() {
  return (
    <>
      <h2 className="text-white">Tags</h2>
      <div className="line"></div>
      <div className="tags">
        {tag.map((a, i) => (
          <button
            className="px-2 border border-0 text-white"
            style={{ backgroundColor: colors[i] }}
            key={i}
          >
            {a.name}
          </button>
        ))}
      </div>
    </>
  );
}
