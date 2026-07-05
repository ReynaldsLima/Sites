// A hand-drawn composition, not stock art: this is how a "§" actually
// appears in a printed statute — a marginal mark beside a numbered block
// of article text — rather than a scales-of-justice/gavel cliché.
export default function StatuteMark() {
  return (
    <svg
      viewBox="0 0 220 260"
      className="h-full w-full"
      aria-hidden
      fill="none"
    >
      {/* Opening rule, like the top border of an article block. */}
      <line
        x1="24"
        y1="28"
        x2="196"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-white/25"
      />

      {/* The section mark, sitting in the margin next to the article text —
          exactly where it sits on a real printed page of legislation. */}
      <text
        x="26"
        y="150"
        fontFamily="var(--font-serif), Georgia, serif"
        fontSize="104"
        className="fill-accent-on-dark/80"
      >
        §
      </text>

      {/* Article text, rendered as ragged-right lines rather than literal
          words — a paragraph block, not decoration. */}
      <g className="text-white/30" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        <line x1="108" y1="58" x2="188" y2="58" />
        <line x1="108" y1="78" x2="196" y2="78" />
        <line x1="108" y1="98" x2="172" y2="98" />
      </g>
      <g className="text-white/20" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        <line x1="108" y1="130" x2="192" y2="130" />
        <line x1="108" y1="150" x2="160" y2="150" />
        <line x1="108" y1="170" x2="184" y2="170" />
        <line x1="108" y1="190" x2="176" y2="190" />
      </g>

      {/* Closing rule. */}
      <line
        x1="24"
        y1="222"
        x2="196"
        y2="222"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-white/25"
      />
    </svg>
  );
}
