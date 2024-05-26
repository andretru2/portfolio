export const HighlightWords: React.FC<{
  text: string;
  highlightWords: string[];
  highlightClass?: string;
}> = ({
  text,
  highlightWords,
  // highlightClass = " bg-accent/10 text-accent/80 font-medium  rounded-md",
  // highlightClass = " font-semibold",
  highlightClass = "  font-semibold underline underline-offset-2 decoration-accent truncate   text-textColor   px-1 py-0.5",
}) => {
  const highlightWordsRegex = new RegExp(
    `\\b(${highlightWords
      .map((word) => escapeRegExp(word))
      .join("|")})\\b`,
    "gi"
  );

  const parts = text.split(highlightWordsRegex);

  return (
    <p className="overflow-hidden sm:truncate md:whitespace-normal">
      {parts.map((part, index) =>
        highlightWordsRegex.test(part) ? (
          <span key={index} className={highlightClass}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </p>
  );
};

// Helper function to escape special characters in a string
function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
