import Head from "next/head";
import Image from "next/image";
import img from "../../public/login.gif";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Login from "./Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextie - Plan Your Next Events With Us</title>
        <meta name="keywords" content="Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={`login-screen ${inter.className}`}>
        <div className="loginscreen-container">
          <div className="left-column text-center">
            <Image src={img} alt="events.svg" width={700} height={700} />
          </div>

          <div className="text-start">
            <Login />
          </div>
        </div>
      </section>
    </>
  );
}
