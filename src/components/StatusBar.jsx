import { useFullPageScroll } from "../FullPageScrollContext";
import { SECTIONS } from "../sections";

export default function StatusBar() {
  const { activeId, activeIndex } = useFullPageScroll();
  const current = SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];

  return (
    <footer className="status-bar">
      <div className="status-bar__group">
        <span className="status-bar__branch">⎇ main</span>
        <span className="status-bar__sep" />
        <span>✓ no problems</span>
      </div>

      <div className="status-bar__group status-bar__group--right">
        <span>{current.file}</span>
        <span className="status-bar__sep" />
        <span>UTF-8</span>
        <span className="status-bar__sep" />
        <span>
          Ln {activeIndex + 1}, Col {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="status-bar__sep" />
        <span className="status-bar__live">● Prettier</span>
      </div>
    </footer>
  );
}
