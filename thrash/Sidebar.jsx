import { Activity, Book, User } from "@geist-ui/icons";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar-layer">
      <div>
        <Link href="/">
          <h1>Blog</h1>
        </Link>
        <Link href="/dashboard">
          <span className="sidebar-icon">
            <Activity />
          </span>
          <span>Dashboard</span>
        </Link>
        <Link href="/dashboard/posts">
          <span className="sidebar-icon">
            <Book />
          </span>
          <span>Posts</span>
        </Link>
        <Link href="/admin">
          <span className="sidebar-icon">
            <User />
          </span>
          <span>Admins</span>
        </Link>
      </div>
    </div>
  );
}
