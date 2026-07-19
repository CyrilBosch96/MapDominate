interface WordRevealProps {
  id: string;
  words: { text: string; target: string }[];
  className?: string;
  as?: "h1" | "h2";
}

export default function WordReveal({ id, words, className, as = "h2" }: WordRevealProps) {
  const Tag = as;
  return (
    <Tag id={id} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span
            data-word
            data-word-target={w.target}
            style={{ display: "inline-block", color: "rgba(237,242,240,0.25)" }}
          >
            {w.text}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
