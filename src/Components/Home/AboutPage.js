import React from 'react';
import { Header, List, Divider, Grid, Modal, Image } from 'semantic-ui-react';

import Modify1 from './img/modify1.png';
import Modify2 from './img/modify2.png';

export default () => {
  return (
    <div>
      <List size="big">
        <List.Item>
          <Header as="h2" content="About this site:" />
        </List.Item>
        <Divider hidden />
        <List.Item>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Modal trigger={<Image src={Modify1} size="big" />}>
                  <Modal.Header>Modify Panel</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size="massive" src={Modify1} />
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column width={10}>
                <p>
                  Some time ago I started to looking closely at Blockchain technology from developer
                  point of view. My interest was caught by Ethereum, so I decided to create my first
                  Dapp.
                </p>
                <p>
                  At same time I started to refreshing my CV so I decided to connect these 2 ideas.
                  As a result you can now go to "About" tab at the top and read my CV that is
                  located at Ethereum Blockchain (Ropsten network to be exact).
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                <p>
                  I deployed Smart Contract using Truffle and connected it with this webpage. It is
                  still work in progress because so far only I can fully use it (only the owner of
                  Smart Contract can modify it).
                </p>
                <p>
                  {' '}
                  Next stage I'm working on id to share with everyone deployment and modify
                  functionalities.
                </p>
                <p>Check out pictures to see how modify works. </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Modal trigger={<Image src={Modify2} size="big" />}>
                  <Modal.Header>Modifying personal data</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size="massive" src={Modify2} />
                  </Modal.Content>
                </Modal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List.Item>
      </List>
    </div>
  );
};
