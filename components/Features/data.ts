import { TFeature } from "..";

export const features: Omit<TFeature, "isActive">[] = [
  {
    heading: "Custom dedicated URLs per Resource",
    description:
      "Each resource gets its own custom URL to which backup requests are made.",
  },
  {
    heading: "Authentication and IP Restriction",
    description:
      "Secure backup requests with API keys and restrict access to dedicated IP addresses.",
  },
  {
    heading: "Automated backup deletion and cleanup",
    description:
      "Dome automatically deletes backups older than the specified duration.",
  },
];
