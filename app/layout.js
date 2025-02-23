import '../styles/globals.css';

export const metadata = {
  title: "Wipix Studio",
  description: "Web Development, UI/UX Design, and Poster Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
