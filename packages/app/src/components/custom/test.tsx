import React, { PropsWithChildren } from 'react';
import { InfoCard } from '@backstage/core-components';
import Grid from '@material-ui/core/Grid';
import { StructuredMetadataTable } from '@backstage/core-components';

const cardContentStyle = { heightX: 200, width: 500 };

const metadata = {
  Name:
    'Tester Testovsky',
  something: 'Yes',
  'true value': true,
  'false value': false,
  owner: '<list of services/whatever>',
  'longer key name': ['v1', 'v2', 'v3'],
  rules: {
    'permit missing partitions': 'No',
    'max partition finish time': '19 hours',
    Support: {
      'office hours': 'Contact goalie',
      'after hours': 'trigger PD alert',
    },
  },
};

export default {
  title: 'Data Display/Structured Metadata Table',
  component: StructuredMetadataTable,
};

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <Grid container spacing={4}>
    <Grid item>{children}</Grid>
  </Grid>
);

export const Default = () => (
  <Wrapper>
    <InfoCard title="Structured Metadata Table" subheader="Wrapped in InfoCard">
      <div style={cardContentStyle}>
        <StructuredMetadataTable metadata={metadata} />
      </div>
    </InfoCard>
  </Wrapper>
);

export const NotDenseTable = () => (
  <Wrapper>
    <InfoCard
      title="Employee Card"
      subheader="Hello <Name>! This is your info card available to everybody across company. Feel free to edit the contets!"
    >
      <div style={cardContentStyle}>
        <StructuredMetadataTable metadata={metadata} dense={false} />
      </div>
    </InfoCard>
  </Wrapper>
);
