import "./styles.css";
import url from "../../images/image-devices.png";

export default function Clipboard() {
  return (
    <section className="clipboard">
      <div className="wrapper-clipboard grid">
        <h2>Access Clipboard anywhere</h2>
        <p className="description">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks
        </p>
        <img src={url} alt="smartphone and tablet" />
      </div>
    </section>
  );
}
