import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
// import { Badge, Card, Page, Spacer, Text } from "@geist-ui/core";

export default function Events() {
  return (
    <>
      <Sidebar />
      <Navbar
        title={"My Events"}
        description={
          "With our easy-to-use tools and customizable features, you can design, promote, and manage your event with confidence"
        }
      />

      <div className="events-page">
        <h2>Welcome back! </h2>
      </div>

      <style jsx>{`
        .events-page {
          margin-left: 251px;
          padding: 30px;
        }

        h2 {
          font-size: 32px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
