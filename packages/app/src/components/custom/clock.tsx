import { Header } from '@backstage/core-components';
import { wrapInTestApp } from '@backstage/test-utils';
import React, { ComponentType } from 'react';
import { HeaderWorldClock, ClockConfig } from '@backstage/plugin-home';

export default {
  title: 'Plugins/Home/Components/HeaderWorldClock',
  decorators: [(Story: ComponentType<{}>) => wrapInTestApp(<Story />)],
};

export const Default = () => {
  const clockConfigs: ClockConfig[] = [
    {
      label: 'NYC',
      timeZone: 'America/New_York',
    },
    {
      label: 'UTC',
      timeZone: 'UTC',
    },
    {
      label: 'STO',
      timeZone: 'Europe/Stockholm',
    },
    {
      label: 'TYO',
      timeZone: 'Asia/Tokyo',
    },
  ];

  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  return (
    <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock
        clockConfigs={clockConfigs}
        customTimeFormat={timeFormat}
      />
    </Header>
  );
};

export const TwentyFourHourClocks = () => {
  const clockConfigs: ClockConfig[] = [
    {
      label: 'NYC',
      timeZone: 'America/New_York',
    },
    {
      label: 'UTC',
      timeZone: 'UTC',
    },
    {
      label: 'STO',
      timeZone: 'Europe/Stockholm',
    },
    {
      label: 'TYO',
      timeZone: 'Asia/Tokyo',
    },
  ];

  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  return (
    <Header title="Welcome to your self service portal!" pageTitleOverride="Home">
      <HeaderWorldClock
        clockConfigs={clockConfigs}
        customTimeFormat={timeFormat}
      />
    </Header>
  );
};
