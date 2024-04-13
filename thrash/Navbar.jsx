import { Grid } from "@geist-ui/core";
import { Bell, ChevronDown, User } from "@geist-ui/icons";
import Head from "next/head";
import Link from "next/link";
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

      <div className="navbar">
        <Grid.Container gap={1} justify="space-around">
          <Grid xs={12} md={10}>
            <div className="navbar-items">
              <Link href="#">
                <Bell />
              </Link>

              <Link href="#">
                <User />
              </Link>

              <Link href="#">
                <ChevronDown />
              </Link>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
}
