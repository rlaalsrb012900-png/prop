import useRevealOnScroll from "../hooks/useRevealOnScroll";

const VALUES = [
  {
    title: "사용자 중심",
    desc: "사용자의 입장에서 생각하고, 가치 있는 경험을 만듭니다.",
  },
  {
    title: "끊임없는 성장",
    desc: "새로운 기술을 배우고 어제보다 나은 개발을 지향합니다.",
  },
  {
    title: "팀워크 & 소통",
    desc: "함께 성장할 수 있는 팀을 만들고 소통을 중요하게 생각합니다.",
  },
];

export default function About() {
  const revealRef = useRevealOnScroll();

  return (
    <section id="about" className="about reveal-right" ref={revealRef}>
      <div className="section-heading">
        <span className="section-heading__tag">02 · about.json</span>
        <h2>ABOUT_ME</h2>
      </div>

      <div className="about__grid">
        <div className="code-window about__json">
          <div className="code-window__bar">
            <span className="header__dot header__dot--red" />
            <span className="header__dot header__dot--yellow" />
            <span className="header__dot header__dot--green" />
            <span className="code-window__filename">about.json</span>
          </div>
          <pre className="code-window__body">
            <code>
              <J n={1} raw="{" />
              <J n={2} k="name" v='"김민규 (KIM MINGYU)"' />
              <J n={3} k="birth" v='"2002.01.29"' />
              <J n={4} k="email" v='"alsrb012900@naver.com"' />
              <J n={5} k="location" v='"Seoul, Korea"' />
              <J n={6} raw='  "bio": [' />
              <J n={7} indent str='"새로운 것을 배우는 것을 좋아하고,"' />
              <J n={8} indent str='"직접 만들어 성장하는 웹 퍼블리셔입니다."' />
              <J n={9} indent str='"사용자 중심의 UI/UX를 고민하여,"' />
              <J n={10} indent str='"디자인부터 구현까지 경험을 설계합니다."' last />
              <J n={11} raw="  ]" />
              <J n={12} raw="}" />
            </code>
          </pre>
        </div>

        <div className="about__photo has-image">
          <img className="about__photo-img" src="/img/me.png" alt="김민규" />
        </div>

        <div className="about__values">
          <p className="about__values-title tok-comment">// core.values</p>
          {VALUES.map(({ title, desc }) => (
            <div className="about__value" key={title}>
              <span className="about__value-check">✓</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="meta-strip">
        <div className="meta-strip__item">
          <span className="meta-strip__num">2026.03</span>
          <span className="tok-comment">// since</span>
        </div>
        <div className="meta-strip__item">
          <span className="meta-strip__num">4</span>
          <span className="tok-comment">// projects</span>
        </div>
        <div className="meta-strip__item">
          <span className="meta-strip__num">100%</span>
          <span className="tok-comment">// caffeine</span>
        </div>
        <div className="meta-strip__line">
          <span className="term-prompt">mingyu@dev</span>
          <span className="term-path">~</span>
          <span className="term-dollar">$</span> currently learning
          <span className="meta-strip__tags">
            {["React", "Figma", "After Effects"].map((t) => (
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

function J({ n, k, v, raw, str, indent, last }) {
  return (
    <div className="code-line">
      <span className="code-line__num">{n}</span>
      <span className="code-line__content">
        {raw && <span className="tok-punct">{raw}</span>}
        {k && (
          <>
            {"  "}
            <span className="tok-attr">"{k}"</span>
            <span className="tok-punct">: </span>
            <span className="tok-str">{v}</span>
            {!last && <span className="tok-punct">,</span>}
          </>
        )}
        {str && (
          <>
            {indent && "    "}
            <span className="tok-str">{str}</span>
            {!last && <span className="tok-punct">,</span>}
          </>
        )}
      </span>
    </div>
  );
}
