import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Breadcrumbs } from "@geist-ui/core";
import CreateSteps from "./createSteps";

export default function createEvent() {
  return (
    <>
      <Sidebar />
      <Navbar
        title={"Create Event"}
        description={
          "With our easy-to-use tools and customizable features, you can design, promote, and manage your event with confidence"
        }
      />

      <div className="events-page">
        <div className="welcome">
          <h2>Create Event</h2>
          <div style={{ width: "fit-content" }}>
            <Breadcrumbs style={{ textDecoration: "none" }}>
              <Breadcrumbs.Item
                href={"/events"}
                style={{ color: "#0E7A3E", fontSize: "14px" }}
              >
                My Events
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>Create event</Breadcrumbs.Item>
            </Breadcrumbs>
          </div>
        </div>

        <div className="create-steps">
          <CreateSteps />
        </div>
      </div>

      <style jsx>{`
        .events-page {
          margin-left: 251px;
          padding: 30px;
        }

        h2 {
          font-size: 30px;
          font-weight: 700;
        }

        .create-steps {
          margin-top: 50px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
