import "./styles.css";

export default function SnippetItem({ title, text }) {
  return (
    <li>
      <h3>{title}</h3>
      <p className="description">{text}</p>
    </li>
  );
}
