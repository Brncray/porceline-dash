import { Text, Progress, Card } from '@mantine/core';
import { useState, useEffect } from 'react';
import axios from 'axios';



export function MemberStats({ initialCount }:any) {
    const [count, setCount] = useState(initialCount);
    
    /*
    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await axios.get('https://didactic-enigma-9g6vxpgqqh6r7-3001.app.github.dev/api/members')
                const json = res.data
                console.log(json); // Add a console.log here to debug the response
                setCount(json.count);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    */




    const progressValue = (count / 10000) * 100;

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card withBorder radius="md" padding="xl" bg="var(--mantine-color-body)" style={{width: '25%'}}>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                User Count
            </Text>
            <Text fz="lg" fw={500}>
                {count} / 10000
            </Text>
            <Progress value={progressValue} mt="md" size="lg" radius="xl" />
        </Card>
        </div>
    );
}

