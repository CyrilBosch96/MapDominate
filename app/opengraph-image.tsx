import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Fetch TTF via Google Fonts CSS API — Android 2.x UA requests TTF format
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Bebas+Neue",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 2.2; Nexus One Build/FRF91)",
      },
    }
  ).then((res) => res.text());
  const ttfUrl = css.match(/url\(([^)]+)\)/)?.[1] ?? "";
  const font = await fetch(ttfUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent glow — top right */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(232,255,71,0.12)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: "Bebas Neue",
              fontSize: 32,
              letterSpacing: "0.04em",
              color: "#f5f5f0",
            }}
          >
            MAP
            <span style={{ color: "#e8ff47" }}>DOMINATE</span>
          </span>
          <div
            style={{
              marginLeft: 16,
              background: "rgba(232,255,71,0.12)",
              border: "1px solid rgba(232,255,71,0.3)",
              borderRadius: 100,
              padding: "4px 12px",
              display: "flex",
            }}
          >
            <span
              style={{
                color: "#e8ff47",
                fontSize: 11,
                letterSpacing: "0.12em",
                fontFamily: "sans-serif",
              }}
            >
              GOOGLE MAPS RANKING
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: "Bebas Neue",
            fontSize: 104,
            lineHeight: 0.95,
            letterSpacing: "0.01em",
            color: "#f5f5f0",
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>DOMINATE GOOGLE MAPS.</span>
          <span style={{ color: "#e8ff47" }}>GET MORE CALLS.</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            color: "#a0a09a",
            fontSize: 22,
            lineHeight: 1.5,
            maxWidth: 620,
            display: "flex",
          }}
        >
          We rank your business in the Google 3-Pack — so your phone rings, not
          your competitor&apos;s.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: "auto",
            paddingTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            ["70%", "of clicks go to top 3"],
            ["3×", "more inbound calls"],
            ["6–12 wks", "to first results"],
            ["1", "client per city per trade"],
          ].map(([num, label]) => (
            <div
              key={num}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  color: "#e8ff47",
                  fontSize: 36,
                  fontFamily: "Bebas Neue",
                  lineHeight: 1,
                }}
              >
                {num}
              </span>
              <span
                style={{
                  color: "#a0a09a",
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Bebas Neue", data: font, style: "normal" }],
    }
  );
}
