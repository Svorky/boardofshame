import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import "../styles/navigation.css";

const RootLayout = () => (
  <>
    <nav className={"bar"}>
      <Link
        to="/"
        activeProps={{ className: "font-bold" }}
        activeOptions={{ exact: true }}
      >
        Доска позора
      </Link>
      <Link
        to="/glory"
        className="top-link"
        activeProps={{ className: "font-bold" }}
      >
        Доска почёта
      </Link>
    </nav>
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
