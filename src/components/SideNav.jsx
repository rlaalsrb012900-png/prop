import { SECTIONS } from "../sections";
import { useFullPageScroll } from "../FullPageScrollContext";

export default function SideNav() {
  const { activeId, goToSection } = useFullPageScroll();

  return (
    <aside className="side-nav">
      <div className="side-nav__folder" title="mingyu-profile/">
        <span>📁</span>
      </div>

      <nav className="side-nav__list">
        {SECTIONS.map(({ id, num, file, color }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`side-nav__item${activeId === id ? " is-active" : ""}`}
            title={file}
            onClick={(e) => {
              e.preventDefault();
              goToSection(id);
            }}
          >
            <span className="side-nav__item-bar" style={{ background: color }} />
            <span className="side-nav__item-num">{num}</span>
          </a>
        ))}
      </nav>

      <div className="side-nav__scroll">
        <span className="side-nav__scroll-cursor">▾</span>
        <span className="side-nav__scroll-text">scroll</span>
      </div>
    </aside>
  );
}
