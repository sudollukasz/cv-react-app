import React from 'react';
import { Header, List, Segment, Divider, Grid } from 'semantic-ui-react';

export default () => {
  return <div>
      <List size="big">
        <List.Item>
          <Header as="h2" content="Skills:" />
        </List.Item>
        <Segment secondary>
          <List.Item>
            <Grid>
              <Grid.Row columns={3} divided>
                <Grid.Column>
                  <List animated verticalAlign="middle">
                    <List.Item>
                      <Header as="h3">
                        <List.Icon name="code" />
                        <Header.Content>Programing languages:</Header.Content>
                      </Header>
                    </List.Item>
                    <List.Item>Java Script</List.Item>
                    <List.Item>React</List.Item>
                    <List.Item>Redux</List.Item>
                    <List.Item>NodeJS</List.Item>
                    <List.Item>Solidity</List.Item>
                    <List.Item>Truffle</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List animated verticalAlign="middle">
                    <List.Item>
                      <Header as="h3">
                        <List.Icon name="cogs" />
                        <Header.Content>Hard skills:</Header.Content>
                      </Header>
                    </List.Item>
                    <List.Item>Dynamics CRM</List.Item>
                    <List.Item>Business analysis</List.Item>
                    <List.Item>Software portfolio management</List.Item>
                    <List.Item>Jira</List.Item>
                    <List.Item>Scrum</List.Item>
                    <List.Item>Git</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List animated verticalAlign="middle">
                    <List.Item>
                      <Header as="h3">
                        <List.Icon name="bullhorn" />
                        <Header.Content>Soft skills:</Header.Content>
                      </Header>
                    </List.Item>
                    <List.Item>Collaboration</List.Item>
                    <List.Item>Communication</List.Item>
                    <List.Item>Problem solving</List.Item>
                    <List.Item>Adaptability</List.Item>
                    <List.Item>Flexible</List.Item>
                    <List.Item>Willingness to Learn</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Item>
        </Segment>
      </List>
      <Divider hidden />
    </div>;
};
