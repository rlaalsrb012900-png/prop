import { FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const CHANNELS = [
  {
    icon: <HiOutlineMail />,
    label: "email",
    value: "alsrb012900@naver.com",
    href: "mailto:alsrb012900@naver.com",
  },
  {
    icon: <HiOutlinePhone />,
    label: "phone",
    value: "010-3227-7041",
    href: "tel:010-3227-7041",
  },
  {
    icon: <FaInstagram />,
    label: "instagram",
    value: "@kkkk_m.g",
    href: "https://instagram.com/kkkk_m.g",
  },
  {
    icon: <FaGithub />,
    label: "github",
    value: "alsrb012900-beep",
    href: "https://github.com/alsrb012900-beep",
  },
];

export default function Contact() {
  const revealRef = useRevealOnScroll();

  return (
    <section id="contact" className="contact reveal-right" ref={revealRef}>
      <div className="section-heading">
        <span className="section-heading__tag">05 · contact.js</span>
        <h2>
          LET'S_<span className="tok-str">CONNECT</span>
        </h2>
      </div>

      <p className="contact__desc tok-comment">
        // 성장할 준비가 되어 있습니다. 편하게 연락 주세요!
      </p>

      <div className="contact__channels">
        {CHANNELS.map(({ icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="contact__channel"
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="contact__channel-icon">{icon}</span>
            <span className="tok-attr">{label}</span>
            <span className="tok-punct">:</span>
            <span className="tok-str">{value}</span>
          </a>
        ))}
      </div>

      <button className="term-btn contact__cta">
        <span className="term-dollar">$</span> send --message "채용 제안 환영합니다"
        <span className="hero__cursor">_</span>
      </button>

      <div className="contact__status">
        <div className="contact__status-item">
          <span className="contact__status-dot" />
          <span className="tok-attr">available</span>
          <span className="tok-punct">: true</span>
        </div>
        <div className="contact__status-item">
          <span className="tok-attr">response_time</span>
          <span className="tok-punct">: </span>
          <span className="tok-str">"within 24h"</span>
        </div>
        <div className="contact__status-item">
          <span className="tok-attr">timezone</span>
          <span className="tok-punct">: </span>
          <span className="tok-str">"Asia/Seoul (UTC+9)"</span>
        </div>
      </div>

      <span className="contact__watermark" aria-hidden="true">
        &lt;/mingyu&gt;
      </span>

      <div className="code-window contact__note">
        <div className="code-window__bar">
          <span className="header__dot header__dot--red" />
          <span className="header__dot header__dot--yellow" />
          <span className="header__dot header__dot--green" />
          <span className="code-window__filename">motto.js</span>
        </div>
        <pre className="code-window__body">
          <code>
            <div className="code-line">
              <span className="code-line__num">1</span>
              <span className="code-line__content tok-comment">/**</span>
            </div>
            <div className="code-line">
              <span className="code-line__num">2</span>
              <span className="code-line__content tok-comment">
                {" "}
                * "좋은 코드는 문제를 해결하고,
              </span>
            </div>
            <div className="code-line">
              <span className="code-line__num">3</span>
              <span className="code-line__content tok-comment">
                {"  "}좋은 경험은 사람을 움직입니다."
              </span>
            </div>
            <div className="code-line">
              <span className="code-line__num">4</span>
              <span className="code-line__content tok-comment"> * — MINGYU</span>
            </div>
            <div className="code-line">
              <span className="code-line__num">5</span>
              <span className="code-line__content tok-comment"> */</span>
            </div>
          </code>
        </pre>
      </div>

      <p className="contact__footer tok-comment">
        // © 2026 KIM MINGYU. ALL RIGHTS RESERVED.
      </p>
    </section>
  );
}
