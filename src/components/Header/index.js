import "./styles.css";
import url from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header grid">
      <section className="hero">
        <img src={url} alt="logo" className="hero__logo" />
        <h1>A history of everything you copy</h1>
        <p className="description">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="hero__wrapper-button">
          <a href="/" className="button cyan">
            Download for iOS
          </a>
          <a href="/" className="button blue">
            Download for Mac
          </a>
        </div>
      </section>
    </header>
  );
}
