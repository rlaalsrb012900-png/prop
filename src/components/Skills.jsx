import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiFigma,
} from "react-icons/si";
import { TbBrandAdobePhotoshop, TbBrandAdobePremiere } from "react-icons/tb";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const STACK = [
  {
    name: "HTML / CSS",
    color: "var(--orange)",
    usage: "시맨틱 마크업 · 반응형 레이아웃 퍼블리싱",
    projects: "Daily Brew, Maple Hub",
  },
  {
    name: "JavaScript",
    color: "var(--yellow)",
    usage: "검색 · 추천 로직, 동적 UI 인터랙션 구현",
    projects: "오늘 뭐하지?",
  },
  {
    name: "React",
    color: "var(--blue)",
    usage: "컴포넌트 설계 · 상태 관리로 UI 조립",
    projects: "CODE LAB, Maple Hub",
  },
  {
    name: "Figma",
    color: "var(--purple)",
    usage: "와이어프레임 설계 · UI 디자인 시안 제작",
    projects: "전 프로젝트",
  },
  {
    name: "Photoshop",
    color: "var(--green)",
    usage: "브랜드 비주얼 · 상세페이지 이미지 작업",
    projects: "Daily Brew",
  },
  {
    name: "Premiere Pro / AE",
    color: "var(--pink)",
    usage: "웹페이지 소개 영상 편집 · 개인정보보호 영상 제작",
    projects: "웹페이지 소개 영상, 개인정보보호 영상",
  },
];

const TOOLS = [
  { icon: <SiHtml5 />, className: "tool--html", name: "html5" },
  { icon: <SiCss />, className: "tool--css", name: "css3" },
  { icon: <SiJavascript />, className: "tool--js", name: "javascript" },
  { icon: <SiReact />, className: "tool--react", name: "react" },
  { icon: <SiFigma />, className: "tool--figma", name: "figma" },
  { icon: <TbBrandAdobePhotoshop />, className: "tool--ps", name: "photoshop" },
  { icon: <TbBrandAdobePremiere />, className: "tool--pr", name: "premiere pro" },
  { icon: <span className="tool-icon__text">Ae</span>, className: "tool--ae", name: "after effects" },
];

const ETC = ["git", "vscode", "premiere pro", "after effects", "photoshop", "figma"];

export default function Skills() {
  const revealRef = useRevealOnScroll();

  return (
    <section id="skills" className="skills reveal-right" ref={revealRef}>
      <div className="section-heading">
        <span className="section-heading__tag">04 · skills.json</span>
        <h2>SKILLS</h2>
      </div>

      <div className="skills__grid">
        <div className="skills__main">
          <p className="tok-comment skills__lead">
            // 기술을 이해하고, 상황에 맞게 적용할 수 있는 웹 퍼블리셔가 되기
            위해 꾸준히 학습하고 있습니다.
          </p>

          <h4>$ cat stack.json</h4>
          <div className="skills__stack">
            {STACK.map((s) => (
              <div className="skills__stack-row" key={s.name}>
                <span
                  className="skills__stack-name"
                  style={{ color: s.color }}
                >
                  {s.name}
                </span>
                <span className="skills__stack-usage">{s.usage}</span>
                <span className="skills__stack-proj tok-comment">
                  // {s.projects}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__side">
          <div className="skills__tools">
            <h4>$ npm list --tools</h4>
            <div className="skills__tools-grid">
              {TOOLS.map(({ icon, className, name }) => (
                <span key={name} className={`tool-icon ${className}`} title={name}>
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__etc">
            <h4>$ which etc</h4>
            <div className="skills__etc-grid">
              {ETC.map((item) => (
                <span key={item} className="etc-pill">
                  <span className="tok-dollar">$</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
