import { Button, Group } from "@mantine/core";
import { HeroText } from "../components/hero/HeroText";
import { MemberStats } from "../components/progress/memberStats";

export default function IndexPage() {
  return (
    <div>
      <HeroText />
      <MemberStats />
    </div>
  );
}
