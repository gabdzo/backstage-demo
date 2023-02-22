

import {
 HomePageToolkit,
 HomePageCompanyLogo,
 HomePageStarredEntities,
 TemplateBackstageLogoIcon
}
 from '@backstage/plugin-home';
import { wrapInTestApp, TestApiProvider } from '@backstage/test-utils';
import { Content, Page, InfoCard } from '@backstage/core-components';
import {
 starredEntitiesApiRef,
 MockStarredEntitiesApi,
 entityRouteRef,
 catalogApiRef,
}
 from '@backstage/plugin-catalog-react';
import { configApiRef } from '@backstage/core-plugin-api';
import { ConfigReader } from '@backstage/config';
import {
 HomePageSearchBar,
 searchPlugin,
}
 from '@backstage/plugin-search';
import { searchApiRef, SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React, { ComponentType } from 'react';

import { ExampleLogViewer } from '../custom/log';
import { TwentyFourHourClocks } from '../custom/clock';
import { NotDenseTable } from '../custom/test';
import { Default as Trends} from '../custom/trends';
import LogoIcon from '../Root/LogoIcon';

// MyStorybookComponent.tsx

import { MyComponent } from './MyQuote';


const entities = [
 {
   apiVersion: '1',
   kind: 'Component',
   metadata: {
     name: 'mock-starred-entity',
     title: 'Mock Starred Entity!',
   },
 },
 {
   apiVersion: '1',
   kind: 'Component',
   metadata: {
     name: 'mock-starred-entity-2',
     title: 'Mock Starred Entity 2!',
   },
 },
 {
   apiVersion: '1',
   kind: 'Component',
   metadata: {
     name: 'mock-starred-entity-3',
     title: 'Mock Starred Entity 3!',
   },
 },
 {
   apiVersion: '1',
   kind: 'Component',
   metadata: {
     name: 'mock-starred-entity-4',
     title: 'Mock Starred Entity 4!',
   },
 },
];

const mockCatalogApi = {
 getEntities: async () => ({ items: entities }),
};

const starredEntitiesApi = new MockStarredEntitiesApi();
starredEntitiesApi.toggleStarred('component:default/example-starred-entity');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-2');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-3');
starredEntitiesApi.toggleStarred('component:default/example-starred-entity-4');


export default {
 title: 'Plugins/Home/Templates',
 decorators: [
   (Story: ComponentType<{}>) =>
     wrapInTestApp(
       <>
         <TestApiProvider
           apis={[
             [catalogApiRef, mockCatalogApi],
             [starredEntitiesApiRef, starredEntitiesApi],
             [searchApiRef, { query: () => Promise.resolve({ results: [] }) }],
             [
                configApiRef,
                new ConfigReader({
                  stackoverflow: {
                    baseUrl: 'https://api.stackexchange.com/2.2',
                  },
                }),
              ],
            ]}
          >
            <Story />
          </TestApiProvider>
        </>,
        {
          mountedRoutes: {
            '/hello-company': searchPlugin.routes.root,
            '/catalog/:namespace/:kind/:name': entityRouteRef,
          },
        },
      ),
  ],
};

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

export const HomePage = () => {
  const classes = useStyles();
  const { container } = useLogoStyles();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<LogoIcon />}
            />
            <Grid container item xs={12} alignItems="center" direction="row">
              <TwentyFourHourClocks
              />
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
              <HomePageSearchBar
                classes={{ root: classes.searchBar }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
            <MyComponent/> 
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
