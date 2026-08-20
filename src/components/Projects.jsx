import { useRef } from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const PROJECTS = [
  {
    tagType: "TeamProject",
    title: "</>CODE LAB",
    subtitle: "Drag & Drop Web Builder",
    desc: "드래그 앤 드롭으로 웹사이트를 제작하고 실시간으로 결과를 미리볼 수 있는 노코드 웹 빌더",
    tags: ["웹빌더", "드래그앤드롭", "실시간미리보기"],
    image: "/img/codelab.png",
    url: "https://codelab-c.netlify.app",
  },
  {
    tagType: "PersonalProject",
    title: "MAPLE HUB",
    subtitle: "Game Info Hub",
    desc: "메이플스토리 직업, 보스 공략, 계산기, 이벤트 소식을 한 곳에 모은 게임 정보 허브 사이트",
    tags: ["게임정보", "공략", "커뮤니티"],
    image: "/img/maple_hub.PNG",
    url: "http://alsrb012900.dothome.co.kr/maple_hub",
  },
  {
    tagType: "TeamProject",
    title: "오늘 뭐하지?",
    subtitle: "Recommendation Service",
    desc: "영화, 스타일, 맛집, 놀거리를 취향에 맞게 추천해주는 오늘의 선택 큐레이션 서비스",
    tags: ["추천", "검색", "큐레이션"],
    image: "/img/today.png",
    url: "http://alsrb012900.dothome.co.kr/mainpage",
  },
  {
    tagType: "PersonalProject",
    title: "DAILY BREW",
    subtitle: "Coffee Brand Site",
    desc: "커피 브랜드의 아이덴티티를 담은 감성적 반응형 브랜드 사이트 (디자인 & 퍼블리싱)",
    tags: ["브랜드 사이트", "반응형", "디자인"],
    image: "/img/dailybrew.PNG",
    url: "http://alsrb012900.dothome.co.kr/1st",
  },
];

const TEAM_COUNT = PROJECTS.filter((p) => p.tagType === "TeamProject").length;
const PERSONAL_COUNT = PROJECTS.length - TEAM_COUNT;

export default function Projects() {
  const revealRef = useRevealOnScroll();
  const scrollerRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, startLeft: 0 });

  const onPointerDown = (e) => {
    if (e.target.closest("a")) return;
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = { dragging: true, startX: e.clientX, startLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.dragging) return;
    const el = scrollerRef.current;
    el.scrollLeft = dragRef.current.startLeft - (e.clientX - dragRef.current.startX);
  };

  const onPointerUp = () => {
    dragRef.current.dragging = false;
  };

  return (
    <section id="projects" className="projects reveal-right" ref={revealRef}>
      <div className="projects__top">
        <div className="section-heading">
          <span className="section-heading__tag">03 · projects.tsx</span>
          <h2>PROJECTS</h2>
        </div>
        <a href="#projects" className="projects__view-all">
          $ ls ./all-works →
        </a>
      </div>

      <div className="projects__scroll-wrap">
        <div
          className="projects__scroller"
          data-hscroll
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.title}>
              <a
                className={`project-card__thumb${p.image ? " has-image" : ""}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.image ? (
                  <img
                    className="project-card__thumb-img"
                    src={p.image}
                    alt={p.title}
                  />
                ) : (
                  <span className="project-card__thumb-icon">{"</>"}</span>
                )}
              </a>

              <span
                className={`project-card__tag ${
                  p.tagType === "TeamProject" ? "is-team" : "is-personal"
                }`}
              >
                {"<"}
                {p.tagType}
                {" />"}
              </span>

              <h3>
                <span className="tok-comment">// </span>
                {p.title}
              </h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__footer">
                <div className="project-card__hashtags">
                  <span className="tok-punct">[</span>
                  {p.tags.map((t, i) => (
                    <span key={t}>
                      <span className="tok-str">"{t}"</span>
                      {i < p.tags.length - 1 && <span className="tok-punct">, </span>}
                    </span>
                  ))}
                  <span className="tok-punct">]</span>
                </div>
                <a
                  className="project-card__arrow"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} 새 탭에서 열기`}
                >
                  →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="meta-strip">
        <div className="meta-strip__item">
          <span className="meta-strip__num">{PROJECTS.length}</span>
          <span className="tok-comment">// total</span>
        </div>
        <div className="meta-strip__item">
          <span className="meta-strip__num">{TEAM_COUNT}</span>
          <span className="tok-comment">// team</span>
        </div>
        <div className="meta-strip__item">
          <span className="meta-strip__num">{PERSONAL_COUNT}</span>
          <span className="tok-comment">// personal</span>
        </div>
        <div className="meta-strip__line">
          <span className="term-prompt">mingyu@dev</span>
          <span className="term-path">~</span>
          <span className="term-dollar">$</span> tech --used
          <span className="meta-strip__tags">
            {["React", "Three.js", "Figma", "REST API"].map((t) => (
              <span className="stack-tag" key={t}>
                {t}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
