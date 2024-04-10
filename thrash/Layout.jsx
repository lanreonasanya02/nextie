// components/Layout.js
import { GeistProvider, CssBaseline, Container } from "@geist-ui/react";
import Head from "next/head";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <div className="layout">
        <Head>
          <title>Nextie</title>
          <meta name="description" content="Your page description" />
          {/* Add any other meta tags or links to external stylesheets here */}
        </Head>
        {/* <Header /> */}

        <Container>
          <div className="content">
            {/* <Sidebar /> */}
            <main>{children}</main>
          </div>
        </Container>

        <style jsx>{`
          .layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .content {
            display: flex;
            flex: 1;
          }
          main {
            flex: 1;
            padding: 20px;
          }
        `}</style>
      </div>
    </GeistProvider>
  );
}
