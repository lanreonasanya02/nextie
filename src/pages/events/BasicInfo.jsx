import { Input } from "@geist-ui/core";
import { Calendar, CheckInCircleFill, Clock } from "@geist-ui/icons";
import { useState } from "react";

export default function BasicInfo() {
  const [isClickedType, setIsClickedType] = useState("Ticketed event");
  const [isClickedPrivacy, setIsClickedPrivacy] = useState("Public");

  return (
    <>
      <div className="basic-info-container">
        <div className="basic-info">
          <h4>Basic Details</h4>
          <span>
            Let's start with the basics! Enter key details about your event
          </span>
        </div>

        <form action="">
          <div className="event event-name">
            <label htmlFor="event-name">Event Name</label>
            <input type="text" placeholder="Example: CadburyFest 2.0" />
          </div>

          <div className="event event-type">
            <label htmlFor="event-type">Event Type</label>

            <div className="event-buttons">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsClickedType("Ticketed event");
                }}
                className={
                  isClickedType === "Ticketed event" ? "active-btn" : ""
                }
              >
                <span>Ticketed event</span>
                {isClickedType === "Ticketed event" && (
                  <span>
                    <CheckInCircleFill size={20} color="#1DB762" />
                  </span>
                )}
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsClickedType("Invite only");
                }}
                className={isClickedType === "Invite only" ? "active-btn" : ""}
              >
                <span>Invite only</span>
                {isClickedType === "Invite only" && (
                  <span>
                    <CheckInCircleFill size={20} color="#1DB762" />
                  </span>
                )}
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsClickedType("Both");
                }}
                className={isClickedType === "Both" ? "active-btn" : ""}
              >
                <span>Both</span>
                {isClickedType === "Both" && (
                  <span>
                    <CheckInCircleFill size={20} color="#1DB762" />
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="event event-category">
            <label htmlFor="category">Event Category</label>
            <div className="select">
              <select name="" id="">
                <option value="">Select the event category</option>
                <option value="">Corporate</option>
                <option value="">Social</option>
              </select>
            </div>
          </div>

          <div className="event event-type">
            <label htmlFor="privacy">Event Privacy</label>

            <div className="event-buttons">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsClickedPrivacy("Public");
                }}
                className={isClickedType === "Public" ? "active-btn" : ""}
              >
                <span>Public</span>
                {isClickedPrivacy === "Public" && (
                  <span>
                    <CheckInCircleFill size={20} color="#1DB762" />
                  </span>
                )}
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsClickedPrivacy("Private");
                }}
                className={isClickedType === "Private" ? "active-btn" : ""}
              >
                <span>Private</span>
                {isClickedPrivacy === "Private" && (
                  <span>
                    <CheckInCircleFill size={20} color="#1DB762" />
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="event time-zone">
            <label htmlFor="privacy">Time Zone</label>
            <div className="select">
              <select name="" id="">
                <option value="">Select the time zone</option>
                <option value="">Corporate</option>
                <option value="">Social</option>
              </select>
            </div>
          </div>

          <div className="event dates">
            <div>
              <label htmlFor="">Start date</label>
              <Input
                clearable
                label={<Calendar color="#30D667" />}
                width="100%"
                placeholder="dd/mm/yyyy"
                // value=""
                // onChange={}
              />
            </div>

            <div>
              <label htmlFor="">End date</label>
              <Input
                clearable
                label={<Calendar color="#30D667" />}
                width="100%"
                placeholder="dd/mm/yyyy"
                // value=""
                // onChange={}
              />
            </div>
          </div>

          <div className="event dates time">
            <div>
              <label htmlFor="">Time (from)</label>
              <Input
                clearable
                label={<Clock color="#30D667" />}
                width="100%"
                placeholder="00:00"
                //   value=""
                // onChange={}
              />
            </div>

            <div>
              <label htmlFor="">Time (to)</label>
              <Input
                clearable
                label={<Clock color="#30D667" />}
                width="100%"
                placeholder="00:00"
                //   value=""
                // onChange={}
              />
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        .basic-info {
          border: 1px solid #1db762;
          border-radius: 10px;
          background-color: #1db762;
          padding: 20px 40px;
          color: #fff;
        }

        h4 {
          text-transform: uppercase;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
