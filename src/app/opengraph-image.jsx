
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#18181B",
          color: "#FFFFFF",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#A5B4FC",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            DN. / PORTFOLIO
          </div>

          <div
            style={{
              display: "flex",
              color: "#A1A1AA",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            Full Stack DEVELOPER
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -4,
            }}
          >
            Dima Nemer
            <span style={{ color: "#818CF8" }}>.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 35,
              color: "#D4D4D8",
            }}
          >
            Full-Stack Developer
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 23,
              color: "#A1A1AA",
            }}
          >
            Building secure, production-ready web and mobile applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #3F3F46",
            paddingTop: 25,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#A5B4FC",
              fontSize: 19,
              letterSpacing: 1,
            }}
          >
            REACT / NEXT.JS / REACT NATIVE
          </div>

          <div
            style={{
              display: "flex",
              color: "#A5B4FC",
              fontSize: 32,
            }}
          >
            ↗
          </div>
        </div>
      </div>
    ),
    size
  );
}
