import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Grid, HelpCircle, User, Settings, LogOut } from "@geist-ui/icons";
import logo from "../../public/sidebar-logo.png";

export default function Sidebar() {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div className="sidebar">
      <div className="top-links ">
        <Image src={logo} width={300} height={90} placeholder="blur" />

        <div className="links">
          <Link
            href="/events"
            className={`menu-link ${isActive("/events") ? "active" : ""}`}
          >
            <div className="menu-link">
              <Grid className="menu-icon" size={18} />
              <span>My Events</span>
            </div>
          </Link>

          <Link
            href="/profile"
            className={`menu-link ${isActive("/profile") ? "active" : ""}`}
          >
            <div className="menu-link">
              <User size={18} className="menu-icon" />
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="bottom-links">
        <Link
          href="/help"
          className={`menu-link ${isActive("/help") ? "active" : ""}`}
        >
          <div className="menu-link">
            <HelpCircle size={18} className="menu-icon" />
            <span>Help</span>
          </div>
        </Link>

        <Link
          href="/settings"
          className={`menu-link ${isActive("/settings") ? "active" : ""}`}
        >
          <div className="menu-link">
            <Settings size={18} className="menu-icon" />
            <span>Settings</span>
          </div>
        </Link>

        <div className="log-out">
          <Link href="/">
            <div className="menu-link">
              <LogOut size={18} className="menu-icon" />
              <span>Log Out</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
