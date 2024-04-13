import { Bell, User, ChevronDown } from "@geist-ui/icons";
import Head from "next/head";
import React from "react";

export default function Navbar({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="Events" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="hidden"></div>

        <div className="hidden"></div>

        <div className="icons">
          <span className="icon other-icons">
            <Bell size={25} title="Notifications" color="#0E7A3E" />
            <span className="notifications">2</span>
          </span>

          <span className="icon">
            <User title="User" color="#0E7A3E" size={25} />
          </span>

          <span className="icon">
            <ChevronDown title="More" color="#0E7A3E" size={25} />
          </span>
        </div>
      </nav>
    </>
  );
}
