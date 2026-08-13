import "./globals.css";

export const metadata = {
  title: "Tina Gerlich | SQL, Data & Business Systems",
  description:
    "Portfolio of Tina Gerlich — SQL Server, data integration, Dynamics 365, Power Platform, Dynamics GP, and business systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
