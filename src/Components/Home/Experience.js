import React from 'react';
import { Header, List, Image, Divider, Grid } from 'semantic-ui-react';

import MSLogo from './img/MS.png';
import DanoneLogo from './img/danone.png';
import APNLogo from './img/APN.png';
import SCALogo from './img/SCA.png';
import AvonLogo from './img/avon.png';

export default () => {
  return (
    <div>
      <List size="big">
        <List.Item>
          <Header as="h2" content="Companies I worked for:" />
          <Grid>
            <Grid.Row columns={5}>
              <Grid.Column verticalAlign="middle">
                <Image src={MSLogo} size="medium" verticalAlign="bottom" />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Image src={SCALogo} size="medium" />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Image src={DanoneLogo} size="tiny" centered />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Image src={APNLogo} size="medium" />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Image src={AvonLogo} size="medium" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List.Item>
        <Divider hidden />
      </List>
    </div>
  );
};
