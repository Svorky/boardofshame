import { createFileRoute } from "@tanstack/react-router";
import { Shame } from "./shame/Shame";

export const Route = createFileRoute("/")({
  component: Shame,
});
