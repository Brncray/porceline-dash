import { NavbarNested } from "../components/navbar/NavbarNested";
import { Grid } from "@mantine/core";


export default function Dashboard() {
  const profile = {
    username: 'Brncray',
    email: 'bobrien2909@gmail.com',
    avatar_url: 'https://avatars.githubusercontent.com/u/57870234?v=4'
  }
  return (
    <>
      <div style={{ height: '100vh' }}>
        <NavbarNested profile={profile}/>
      </div>

      <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>

    </>
  );
}
