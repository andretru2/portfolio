export const HighlightWords: React.FC<{
  text: string;
  highlightWords?: string[];
  highlightClass?: string;
}> = ({
  text,
  highlightWords = [],
  highlightClass = "font-semibold underline underline-offset-2 decoration-accent  text-textColor px-1 py-0.5",
}) => {
  const trimmedHighlightWords = highlightWords.map((word) =>
    word.trim()
  );
  const highlightWordsRegex =
    trimmedHighlightWords.length > 0
      ? new RegExp(
          `\\b(${trimmedHighlightWords
            .map((word) => escapeRegExp(word))
            .join("|")})\\b`,
          "gi"
        )
      : null;

  // Adjusted to trim each part individually to remove any potential leading/trailing whitespace
  const parts = highlightWordsRegex
    ? text
        .split(highlightWordsRegex)
        .map((part) => part.trim())
    : [text.trim()]; // Ensure the original text is also trimmed

  return (
    <p className="overflow-hidden leading-tight text-s *:text-clip mt-s">
      {parts.map((part, index) =>
        highlightWordsRegex &&
        trimmedHighlightWords.includes(part) ? (
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
