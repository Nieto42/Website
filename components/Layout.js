import Head from "next/head";

import Navbar from "./Navbar";

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <Head>
        <title>{page}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="Site web, publicité en ligne, saint laurent du maroni, agence web"
        ></meta>
        <meta
          name="description"
          content="Votre agence web sur saint laurent du maroni."
        ></meta>
        <meta name="author" content="Neto Pompeu"></meta>
      </Head>

      <header className="header">
        <div className="navBar">
          <Navbar></Navbar>
        </div>
      </header>

      <main className="children">{children}</main>
      <footer></footer>
    </div>
  );
}
