export const HighlightWords: React.FC<{
  text: string;
  highlightWords?: string[];
  highlightClass?: string;
}> = ({
  text,
  highlightWords = [],
  highlightClass = "font-semibold underline underline-offset-2 decoration-accent truncate text-textColor px-1 py-0.5",
}) => {
  const highlightWordsRegex =
    highlightWords.length > 0
      ? new RegExp(
          `\\b(${highlightWords
            .map((word) => escapeRegExp(word))
            .join("|")})\\b`,
          "gi"
        )
      : null;

  const parts = highlightWordsRegex
    ? text.split(highlightWordsRegex)
    : [text];

  return (
    <p className="overflow-hidden sm:truncate md:whitespace-normal">
      {parts.map((part, index) =>
        highlightWordsRegex &&
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
