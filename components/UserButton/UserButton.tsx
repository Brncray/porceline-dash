import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';


interface UserButtonProps {
  profile: any; // replace 'any' with the actual type of 'profile'
}


export function UserButton({profile}: UserButtonProps) {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src={profile.avatar_url || '/Default_pfp.jpg'}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {profile.username || 'unknown'}
          </Text>

          <Text c="dimmed" size="xs">
            {profile.email || 'unknown email'}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}