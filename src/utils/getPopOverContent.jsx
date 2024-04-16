import Link from "next/link";
import {
  ExternalLink,
  Grid,
  Copy,
  Repeat,
  Delete,
  CheckCircle,
} from "@geist-ui/icons";
import { Spacer } from "@geist-ui/core";

export default function getPopOverContent() {
  const contentStyle = {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    color: "#000",
  };

  return (
    <div
      className="popover-content"
      style={{ padding: "5px 15px", fontSize: "14px" }}
    >
      <Link href="#">
        <span style={contentStyle}>
          <span>
            <ExternalLink size={16} />
          </span>
          <span>Publish</span>
        </span>
      </Link>

      <Spacer h={0.9} />

      <Link href="#">
        <span style={contentStyle}>
          <span>
            <Grid size={16} />
          </span>
          <span>Go to Dashboard</span>
        </span>
      </Link>

      <Spacer h={0.9} />

      <Link href="#">
        <span style={contentStyle}>
          <span>
            <Copy size={16} />
          </span>
          <span>Copy Link</span>
        </span>
      </Link>

      <Spacer h={0.9} />

      <Link href="#">
        <span style={contentStyle}>
          <span>
            <Repeat size={16} />
          </span>
          <span>Duplicate Event</span>
        </span>
      </Link>

      <Spacer h={0.9} />

      <Link href="#">
        <span style={contentStyle}>
          <span>
            <CheckCircle size={16} />
          </span>
          <span>Check-in</span>
        </span>
      </Link>

      <Spacer h={0.9} />

      <Link href="#">
        <span style={{ ...contentStyle, color: "red" }}>
          <span>
            <Delete size={16} />
          </span>
          <span>Delete Event</span>
        </span>
      </Link>
    </div>
  );
}
