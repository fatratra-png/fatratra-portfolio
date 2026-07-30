import { content } from "../content";
import { useReveal } from "../hooks/useStaggeredReveal";
import { useState } from "react";

export default function Contact() {
  const { ref, revealed } = useReveal();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(`mailto:${content.email}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        maxWidth: 768,
        margin: "0 auto",
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "#aaa",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Contact
        </p>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
          }}
        >
          Get in touch
        </h2>
        <p
          style={{
            color: "#888",
            fontSize: "0.95rem",
            marginBottom: "2rem",
            maxWidth: 420,
          }}
        >
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.25rem 1.5rem",
            border: "1px solid #eaeaea",
            borderRadius: "0.5rem",
            background: "#fff",
            transition: "border-color 0.2s",
            marginBottom: "1.5rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#111";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#eaeaea";
          }}
        >
          <span
            onClick={copy}
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#111",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {content.email}
            {copied && (
              <span
                style={{
                  position: "absolute",
                  top: -28,
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "0.2rem 0.6rem",
                  background: "#111",
                  color: "#fafafa",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  borderRadius: "0.2rem",
                }}
              >
                Copied!
              </span>
            )}
          </span>
          <span
            onClick={copy}
            style={{ fontSize: "0.75rem", color: "#bbb", marginLeft: "auto", cursor: "pointer", display: "flex", alignItems: "center", padding: "0.25rem" }}
            title="Copy mailto link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </span>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {content.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#888",
                borderBottom: "1px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#111";
                e.currentTarget.style.borderColor = "#ddd";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
