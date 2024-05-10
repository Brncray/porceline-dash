import { NavbarNested } from "../components/navbar/NavbarNested";
import { Grid, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";


export default function Dashboard() {

  const [isLoading, setIsLoading] = useState(true);

  const servers = [
    {
      name: 'Server 1', 
      members: 10
    },
    {
      name: 'Server 2', 
      members: 20
    },
    {
      name: 'Server 3', 
      members: 30
    },
    {
      name: 'Server 4', 
      members: 40
    },
    {
      name: 'Server 5', 
      members: 50
    },
    {
      name: 'Server 6', 
      members: 60
    },
    {
      name: 'Server 7', 
      members: 70
    },
    {
      name: 'Server 8', 
      members: 80
    },
    {
      name: 'Server 9', 
      members: 90
    },
    {
      name: 'Server 10', 
      members: 100
    },
  ]

  useEffect(() => {
    setIsLoading(true)
  }, [])



  const profile = {
    username: 'Brncray',
    email: 'bobrien2909@gmail.com',
    avatar_url: 'https://avatars.githubusercontent.com/u/57870234?v=4'
  }

  const skeletonCount = 28; 
  return (
    
    <>
    <div style={{ display: 'flex', height: '100vh' }}>
      <div>
        <NavbarNested profile={profile} />
      </div>

      <div style={{ flex: 1, paddingTop: '100px', paddingLeft: '10vh', paddingRight: '50px' }}>
        <Grid gutter="xl">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
              {isLoading ? (
                <>
                  <Skeleton height={50} mb="md" />
                  <Skeleton height={8} radius="xl" />
                </>
              ) : (
                
                <p></p>
              )}
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </div>
  </>
  );
}
