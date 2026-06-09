import "./globals.css";

export const metadata = {
  title: "WHOOP × Calm — Recovery Has Two Sides",
  description:
    "A speculative creative direction case study exploring a WHOOP and Calm collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
