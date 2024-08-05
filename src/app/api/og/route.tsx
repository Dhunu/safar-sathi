import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Route segment config
export const runtime = "edge";

// Route handler
export async function GET(req: NextRequest) {
    // Extract query parameters
    const { searchParams } = req.nextUrl;
    const image = searchParams.get("image");
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    // Get font from specified URL
    const font = fetch(
        new URL("../../../../public/fonts/outfit-semibold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const fontData = await font;

    // Create a ImageResponse dynamically
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/images/${image}.png)`,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                />
                <div
                    style={{
                        fontSize: 100,
                        fontFamily: "Outfit",
                        letterSpacing: "-0.05em",
                        fontStyle: "normal",
                        color: "white",
                        lineHeight: "120px",
                        whiteSpace: "pre-wrap",
                        textAlign: "center",
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: 40,
                        fontFamily: "Outfit",
                        letterSpacing: "-0.05em",
                        fontStyle: "normal",
                        color: "white",
                        lineHeight: "120px",
                        whiteSpace: "pre-wrap",
                        textAlign: "center",
                    }}
                >
                    {description}
                </div>
            </div>
        ),
        // Image options
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Outfit",
                    data: fontData,
                    style: "normal",
                },
            ],
        }
    );
}
