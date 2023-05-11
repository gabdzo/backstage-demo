

import {
 HomePageToolkit,
 HomePageCompanyLogo,
 HomePageStarredEntities,
 TemplateBackstageLogoIcon
}
 from '@backstage/plugin-home';
import { Content, Page, InfoCard } from '@backstage/core-components';
import {
 HomePageSearchBar,
}
 from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import {
  CatalogFilterLayout,
  EntityListProvider,
  EntityTagPicker,
  EntityTypePicker,
  EntityKindPicker,
} from '@backstage/plugin-catalog-react';

import { CatalogTable, DefaultCatalogPageProps } from '@backstage/plugin-catalog';

import { ExampleLogViewer } from '../custom/log';
import { TwentyFourHourClocks } from '../custom/clock';
import { NotDenseTable } from '../custom/test';
import { Default as Trends} from '../custom/trends';
import LogoIcon from '../Root/LogoIcon';
import { MyComponent } from './MyQuote';
import { Trainings } from './Trainings';
import { EntitySecurityTierPicker } from './CustomFilter';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

export const HomePage = (props: DefaultCatalogPageProps) => {
  const classes = useStyles();
  const { container } = useLogoStyles();

  const {
    columns,
    actions,
  } = props;


  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<LogoIcon/>}
            />
            <Grid container item xs={12} alignItems="center" direction="row">
              <TwentyFourHourClocks
              />
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
                <MyComponent/>
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
            <InfoCard title="New components">
            <EntityListProvider>
                <CatalogFilterLayout>
                    <CatalogFilterLayout.Filters>
                    <EntityKindPicker initialFilter="component" hidden />
                    <EntityTypePicker />
                    <EntitySecurityTierPicker />
                    <EntityTagPicker />
                </CatalogFilterLayout.Filters>
                <CatalogFilterLayout.Content>
                    <CatalogTable columns={columns} actions={actions} />
                </CatalogFilterLayout.Content>
                </CatalogFilterLayout>
            </EntityListProvider>
            </InfoCard>
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
                <Trainings/>
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
              <HomePageSearchBar
                classes={{ root: classes.searchBar }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities title="Favorite Entities"/>
              </Grid>
              <Grid item xs={6} md={6}>
                <HomePageToolkit
                  tools={Array(8).fill({
                    url: '#',
                    label: 'Trainings',
                    icon: <TemplateBackstageLogoIcon />,
                  })}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <NotDenseTable/>
                </Grid>
              <Grid item xs={12} md={6} >
                <Trends/>
                </Grid>
              <Grid item xs={12} md={6} >
                <InfoCard title="Unread Jenkins Errors">
                  {/* placeholder for content */}
                  < ExampleLogViewer/> 
                  <div style={{ height: 870 }} />
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={6}>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
