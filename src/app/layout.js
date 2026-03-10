// src/app/layout.js
export const metadata = {
  title: "StudyDNA — Discover Your Academic Path",
  description: "Personality-powered course recommendations for Nigerian students. Find your ideal university course and check eligibility across 98+ universities.",
  keywords: ["JAMB", "WAEC", "Nigerian university", "course selection", "career guidance"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#060810" }}>
        {children}
      </body>
    </html>
  );
}
