import { useFullPageScroll } from "../FullPageScrollContext";
import { SECTIONS } from "../sections";

export default function Header() {
  const { activeId, goToSection } = useFullPageScroll();

  return (
    <header className="header">
      <div className="header__traffic">
        <span className="header__dot header__dot--red" />
        <span className="header__dot header__dot--yellow" />
        <span className="header__dot header__dot--green" />
      </div>

      <a
        href="#hero"
        className="header__logo"
        onClick={(e) => {
          e.preventDefault();
          goToSection("hero");
        }}
      >
        <span className="header__logo-bracket">{"<"}</span>
        mingyu
        <span className="header__logo-bracket">{" />"}</span>
      </a>

      <nav className="header__tabs">
        {SECTIONS.map(({ id, file, color }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`header__tab${activeId === id ? " is-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              goToSection(id);
            }}
          >
            <span className="header__tab-dot" style={{ background: color }} />
            {file}
          </a>
        ))}
      </nav>

      <div className="header__status">
        <span className="header__status-dot" />
        online
      </div>
    </header>
  );
}
