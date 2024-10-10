export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <header />
          <main>{children}</main>
          {/* <footer> 2024 MyWebsite</footer> */}
        </body>
      </html>
    );
  }