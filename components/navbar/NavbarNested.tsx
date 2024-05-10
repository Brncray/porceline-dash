import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconShieldCog
} from '@tabler/icons-react';
import { UserButton } from '../UserButton/UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import { Logo } from './Logo';
import classes from './NavbarNested.module.css';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Components',
    icon: IconShieldCog,
    initiallyOpened: true,
    links: [
      { label: 'Moderation', link: '/'},
      { label: 'Music', link: '/' },
      { label: 'Fun', link: '/' },
      { label: 'Misc', link: '/' },
    ],
  },
  {label: 'Settings', icon: IconAdjustments},
];

export function NavbarNested({profile}: any) {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          Porceline 
          <Code fw={700}>v0.0.1</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        {/* Sign out Button */}
        <LinksGroup icon={IconLock} label="Sign out" />
        <UserButton profile={profile}/>
      </div>
    </nav>
  );
}