import SnippetItem from "../SnippetItem";
import "./styles.css";
import url from "../../images/image-computer.png";

const data = [
  {
    id: 1,
    title: "Quick Search",
    text:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    id: 2,
    title: "iCloud Sync",
    text: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    id: 3,
    title: "Complete History",
    text:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

export default function SnippetList() {
  return (
    <section className="snippets">
      <div className="wrapper-snippets grid">
        <h2>Keep track of your snippets</h2>
        <p className="description">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <img src={url} alt="macbook" className="snippets__image" />
        <ul>
          {data.map((item) => (
            <SnippetItem key={item.id} title={item.title} text={item.text} />
          ))}
        </ul>
      </div>
    </section>
  );
}
