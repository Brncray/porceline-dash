import { Button, Group } from "@mantine/core";
import { HeroText } from "../components/hero/HeroText";
import { MemberStats } from "../components/progress/memberStats";
import axios from "axios";

export default function IndexPage({initialCount}:any) {
  return (
    <div>
      <HeroText />
      <MemberStats initialCount={initialCount}/>
    </div>
  );
}

export async function getServerSideProps() {
  const count = await memberCount()

  return {
    props: {
      initialCount: count, // This will be passed as a prop to your component
    },
  };
}

async function memberCount() {
  let res;
  try {
    res = await axios.get('http://localhost:3001/api/members');
  } catch (e) {
    return { props: { initialCount: 0 } }; // return a default value if the request fails
  }
  
  const json = res.data.count;
  return json
}
