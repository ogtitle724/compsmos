import { metadata as meta } from "@/config/metadata";
import "./style.css";

meta.title.absolute = `< ${process.env.title} > | daily log | web dev basic | web component | fix error`;
export const metadata = meta;

export default function Page() {
  console.log("main");
  return <main></main>;
}
