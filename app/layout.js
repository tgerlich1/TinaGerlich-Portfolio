import "./globals.css";

export const metadata = {
  title: "Tina Gerlich | Systems, Data & Integration Problem Solver",
  description:
    "Portfolio of Tina Gerlich — SQL Server, Dynamics 365, Power Platform, data integration, business requirements, documentation, ERP, and end-to-end systems problem solving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
