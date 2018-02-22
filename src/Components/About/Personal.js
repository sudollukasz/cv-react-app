import React from "react";
import {
  List,
  Image,
  Grid,
  Header,
  Divider,
  Button,
  Icon
} from "semantic-ui-react";

const Personal = props => {
  if (props.personal.length !== 6) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <Grid>
        <Divider hidden />
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={10}>
            <List size="big">
              <Header as="h2" dividing>
                Personal Info
              </Header>
              <List.Item>
                <b>Name:</b> {props.personal[0]}
              </List.Item>
              <List.Item>
                <b>Birth:</b> {props.personal[1]}
              </List.Item>
              <List.Item>
                <b>City:</b> {props.personal[2]}
              </List.Item>
              <List.Item>
                <b>Phone:</b> {props.personal[3]}
              </List.Item>
              <List.Item>
                <b>Email:</b> {props.personal[4]}
              </List.Item>
              <List.Item>
                <Button
                  color="linkedin"
                  as="a"
                  href="https://www.linkedin.com/in/%C5%82ukasz-sudo%C5%82-43976792/"
                  target="_blank"
                >
                  <Icon name="linkedin" /> LinkedIn
                </Button>{" "}
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Image centered size="medium" src={props.personal[5]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Personal;
