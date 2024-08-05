import { ImageResponse } from "@vercel/og";

export const size = {
    width: 1200,
    height: 630,
};

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "/images/dashboard.png",
                }}
            />
        ),
        { ...size }
    );
}
