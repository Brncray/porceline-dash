import { Title, Text, Button, Container, Progress, Card} from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export function HeroText() {
    const router = useRouter();



  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          
          <Text component="span" className={classes.highlight} inherit>
           Porceline: 
          </Text>{' '}
          your server manager
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Porceline provides a wide range of features to help you manage your server. From moderation to fun commands, Porceline has it all.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Discord Server
          </Button>
          <Button className={classes.control} size="lg">
            Invite the bot
          </Button>
          
          <Button className={classes.control} size="lg"onClick={() => router.push('/dashboard')} >
            Dashboard
          </Button>
        </div>

        
      </div>
    </Container>
  );
}