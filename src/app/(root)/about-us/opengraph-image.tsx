import { ImageResponse } from "next/og";

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
                    backgroundImage:
                        "url(https://safar-sathi.angelsaikia.com/images/about-us.png)",
                }}
            ></div>
        ),
        { ...size }
    );
}
