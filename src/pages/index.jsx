import { useState } from "react";
import Head from "next/head";
import LoginPage from "@/pages/LoginPage";
import SignUp from "./create-account";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isRouteChanged, setIsRouteChanged] = useState(false);

  return (
    <>
      <Head>
        <title>Nextie - Plan Your Next Events With Us</title>
        <meta name="keywords" content="Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isRouteChanged ? (
        <SignUp onChanged={setIsRouteChanged} />
      ) : (
        <LoginPage onChanged={setIsRouteChanged} />
      )}
    </>
  );
}
