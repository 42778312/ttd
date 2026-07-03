import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1c1b1b 0%, #141313 100%)",
          borderRadius: 96,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 360,
            height: 360,
            borderRadius: 80,
            background: "linear-gradient(135deg, #ff516a 0%, #be0039 100%)",
            fontSize: 148,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.04em",
          }}
        >
          TTD
        </div>
      </div>
    ),
    { ...size },
  );
}
