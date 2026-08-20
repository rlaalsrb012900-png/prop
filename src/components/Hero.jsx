import { useFullPageScroll } from "../FullPageScrollContext";

export default function Hero() {
  const { goToSection } = useFullPageScroll();

  return (
    <section id="hero" className="hero">
      <div className="hero__term">
        <p className="term-line">
          <span className="term-prompt">mingyu@dev</span>
          <span className="term-path">~</span>
          <span className="term-dollar">$</span> whoami
        </p>
        <p className="term-output">
          김민규 <span className="term-muted">·</span> Web Publisher
        </p>

        <h1 className="hero__title">
          I <span className="tok-kw">design</span> experiences,
          <br />
          I <span className="tok-kw">build</span>{" "}
          <span className="hero__title-str">solutions</span>
          <span className="tok-punct">;</span>
        </h1>

        <p className="hero__desc">
          <span className="tok-comment">
            // 사용자 경험을 고민하고, 가치를 만드는 웹 퍼블리셔 김민규입니다.
          </span>
        </p>

        <div className="hero__cta">
          <button className="term-btn" onClick={() => goToSection("projects")}>
            <span className="term-dollar">$</span> ./explore-work.sh
          </button>
          <span className="hero__cursor" aria-hidden="true">
            _
          </span>
        </div>

        <div className="hero__stack">
          <span className="tok-comment">// stack.map(use =&gt;)</span>
          <div className="hero__stack-tags">
            {["React", "JavaScript", "HTML5", "CSS3", "Figma"].map((t) => (
              <span className="stack-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num">5개월</span>
          <span className="hero__stat-label tok-comment">// 학습 기간 (2026.03~)</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">4개</span>
          <span className="hero__stat-label tok-comment">// 완성한 프로젝트</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">7개</span>
          <span className="hero__stat-label tok-comment">// 다루는 툴/기술</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">∞</span>
          <span className="hero__stat-label tok-comment">// 배우려는 의지</span>
        </div>
      </div>

      <div className="hero__code">
        <div className="code-window">
          <div className="code-window__bar">
            <span className="header__dot header__dot--red" />
            <span className="header__dot header__dot--yellow" />
            <span className="header__dot header__dot--green" />
            <span className="code-window__filename">Publisher.jsx</span>
          </div>
          <pre className="code-window__body">
            <code>
              <Line n={1}>
                <Kw>import</Kw> Publisher <Kw>from</Kw> <Str>'./team'</Str>
                <Punct>;</Punct>
              </Line>
              <Line n={2}> </Line>
              <Line n={3}>
                <Comment>// Keep Creating!</Comment>
              </Line>
              <Line n={4}>
                <Kw>function</Kw> <Fn>Mingyu</Fn>
                <Punct>()</Punct> <Punct>{"{"}</Punct>
              </Line>
              <Line n={5}>
                {"  "}
                <Kw>return</Kw> <Punct>(</Punct>
              </Line>
              <Line n={6}>
                {"    "}
                <Punct>{"<"}</Punct>
                <Tag>Publisher</Tag>
              </Line>
              <Line n={7}>
                {"      "}
                <Attr>name</Attr>
                <Punct>=</Punct>
                <Str>"김민규"</Str>
              </Line>
              <Line n={8}>
                {"      "}
                <Attr>role</Attr>
                <Punct>=</Punct>
                <Str>"Web Publisher"</Str>
              </Line>
              <Line n={9}>
                {"      "}
                <Attr>stack</Attr>
                <Punct>{"={["}</Punct>
                <Str>'React'</Str>
                <Punct>, </Punct>
                <Str>'JS'</Str>
                <Punct>, </Punct>
                <Str>'CSS'</Str>
                <Punct>{"]}"}</Punct>
              </Line>
              <Line n={10}>
                {"      "}
                <Attr>mindset</Attr>
                <Punct>=</Punct>
                <Str>"Keep Creating"</Str>
              </Line>
              <Line n={11}>
                {"    "}
                <Punct>{"/>"}</Punct>
              </Line>
              <Line n={12}>
                {"  "}
                <Punct>)</Punct>
                <Punct>;</Punct>
              </Line>
              <Line n={13}>
                <Punct>{"}"}</Punct>
              </Line>
              <Line n={14}> </Line>
              <Line n={15}>
                <Kw>export default</Kw> <Fn>Mingyu</Fn>
                <Punct>;</Punct>
              </Line>
            </code>
          </pre>
        </div>

        <div className="hero__live">
          <span className="hero__live-dot" />
          LIVE — building things
        </div>
      </div>
    </section>
  );
}

function Line({ n, children }) {
  return (
    <div className="code-line">
      <span className="code-line__num">{n}</span>
      <span className="code-line__content">{children}</span>
    </div>
  );
}

function Kw({ children }) {
  return <span className="tok-kw">{children}</span>;
}
function Str({ children }) {
  return <span className="tok-str">{children}</span>;
}
function Comment({ children }) {
  return <span className="tok-comment">{children}</span>;
}
function Fn({ children }) {
  return <span className="tok-fn">{children}</span>;
}
function Tag({ children }) {
  return <span className="tok-tag">{children}</span>;
}
function Attr({ children }) {
  return <span className="tok-attr">{children}</span>;
}
function Punct({ children }) {
  return <span className="tok-punct">{children}</span>;
}
