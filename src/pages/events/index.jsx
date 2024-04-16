import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {
  Avatar,
  Card,
  Dot,
  Grid,
  Input,
  Popover,
  Spacer,
  Text,
} from "@geist-ui/core";
import { Calendar, MoreHorizontal, Plus, Search } from "@geist-ui/icons";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import empty from "../../../public/no-event.png";
import { events } from "@/services/Data";
import getPopOverContent from "@/utils/getPopOverContent";
import { useRouter } from "next/router";

export default function Events() {
  const router = useRouter();
  const content = getPopOverContent();

  function createNewEvent() {
    router.push("/events/create");
  }

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
        <div className="events-header">
          <div className="welcome">
            <h2>
              Welcome back, <strong>Cadbury!</strong>{" "}
            </h2>
            <span>Here are the updates you missed while being away</span>
          </div>

          <div>
            <button className="create-btn" onClick={createNewEvent}>
              <span>
                <Plus />
              </span>
              <span>Create an event</span>
            </button>
          </div>
        </div>

        <div className="events-overview">
          <Grid.Container gap={2} justify="center" height="200px">
            <Grid xs={6}>
              <Card
                width="100%"
                hoverable
                style={{
                  borderTopLeftRadius: "30px",
                }}
              >
                <div className="card-details">
                  <h2>{events.length === 0 ? 0 : events.length}</h2>
                  <span>Total events created</span>
                </div>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card
                width="100%"
                hoverable
                style={{
                  background: "#1DB762",
                  color: "#fff",
                  borderTopLeftRadius: "30px",
                }}
              >
                <div className="card-details">
                  <h2>{events.length === 0 ? 0 : 30}</h2>
                  <span>Tickets sold so far</span>
                </div>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card
                width="100%"
                hoverable
                style={{
                  borderTopLeftRadius: "30px",
                }}
              >
                <div className="card-details">
                  <h2>{events.length === 0 ? "0%" : "75%"}</h2>
                  <span>Events Turnover</span>
                </div>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card
                width="100%"
                hoverable
                style={{
                  borderTopLeftRadius: "30px",
                }}
              >
                <div className="card-details">
                  <h2>{events.length === 0 ? "₦0" : "₦150M"}</h2>
                  <span>Revenue Generated</span>
                </div>
              </Card>
            </Grid>
          </Grid.Container>
        </div>

        <div className="events-body">
          <h4>My Events</h4>

          <div className="header-tools">
            <div
              className="filter"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Published</button>
              <button className="filter-btn">Drafted</button>
              <button className="filter-btn">Ended</button>
            </div>

            <div className="search">
              <Input
                iconRight={<Search />}
                placeholder="Enter search here"
                width={25}
              />
            </div>
          </div>

          <div className="events-cards">
            {events.length === 0 ? (
              <Grid.Container gap={2} justify="center">
                <div
                  className="no-events"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <Image src={empty} alt="no-events-yet" />

                  <Text h4 mb={0}>
                    Oops! No events yet.
                  </Text>

                  <Text type="secondary" small>
                    Click &apos;Create Event&apos; to start organizing
                    hassle-free gatherings!
                  </Text>
                </div>
              </Grid.Container>
            ) : (
              <Grid.Container gap={2} justify="center">
                {events.map((event) => {
                  return (
                    <Grid xs key={event.id}>
                      <Card width="400px">
                        <div className="card-image">
                          <span>
                            <Image
                              src={event.img}
                              height="150px"
                              width="400px"
                              draggable={false}
                            />
                          </span>

                          <span className="card-image-header">
                            <span className="category">Published</span>
                            <span className="icon">
                              <Popover content={content}>
                                <MoreHorizontal
                                  color="#fff"
                                  title="See More"
                                  size={30}
                                />
                              </Popover>
                            </span>
                          </span>
                        </div>

                        <Text h4 mb={0}>
                          {event.title}
                        </Text>

                        <Text type="secondary" small>
                          {event.desc}
                        </Text>
                        <Spacer />

                        <div className="footer">
                          <Text
                            type="#30d667"
                            style={{ color: "#30d667", fontWeight: "500" }}
                            span
                            small
                          >
                            {event.price}
                          </Text>

                          <Dot style={{ margin: "0px 8px" }} />

                          <Text type="secondary" span small>
                            <span className="card-calendar">
                              <span>
                                <Calendar size={13} />
                              </span>
                              <span>{event.date}</span>
                            </span>
                          </Text>
                        </div>

                        <div className="avatars">
                          <Avatar.Group count={12}>
                            <Avatar src={avatar} text="Ade" stacked />
                            <Avatar src={avatar} stacked />
                            <Avatar text="Ana" stacked />
                          </Avatar.Group>
                        </div>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid.Container>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .events-page {
          margin-left: 251px;
          padding: 30px;
        }

        .events-header,
        .header-tools {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        h2 {
          font-size: 30px;
          font-weight: 500;
        }

        .create-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 170px;
          padding: 16px;
          color: #fff;
          background-color: #30d667;
          border-style: none;
          border: 1px solid #30d667;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .filter-btn {
          padding: 5px 16px;
          color: #9ca3af;
          background: none;
          border-style: none;
          border: 1px solid #9ca3af;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
        }

        .active {
          color: #0e7a3e;
          background-color: #ecfdf5;
          border: 1px solid #30d667;
        }

        .events-overview,
        .events-body,
        .events-cards {
          margin-top: 40px;
        }

        .card-details {
          text-align: center;
          height: 15vh;
          display: grid;
          place-content: center;
        }

        .footer {
          display: flex;
          align-items: center;
        }

        .card-calendar {
          display: flex;
          align-items: "center";
          gap: 10px;
        }

        .card-image {
          position: relative;
        }

        .card-image-header {
          position: absolute;
          top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 15px;
        }

        .card-image-header .category {
          font-size: 12px;
          color: #03543f;
          background-color: #def7ec;
          padding: 5px;
          border-radius: 8px;
          font-weight: 600;
        }

        .card-image-header .icon {
          cursor: pointer;
        }

        .avatars {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
