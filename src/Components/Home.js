import React from "react";
import {
  Header,
  List,
  Image,
  Divider,
  Grid,
  Segment,
  Modal
} from "semantic-ui-react";
import headerPhoto from "./Home/photo.jpeg";
import MSLogo from "./Home/MS.png";
import DanoneLogo from "./Home/danone.png";
import APNLogo from "./Home/APN.png";
import SCALogo from "./Home/SCA.png";
import AvonLogo from "./Home/avon.png";
import Modify1 from "./Home/modify1.png";
import Modify2 from "./Home/modify2.png";

const Home = () => {
  return (
    <div>
      <Image src={headerPhoto} fluid rounded />
      <Divider hidden />
      <List size="big">
        <List.Item>
          <Header as="h2" content="Welcome to my page!" />
          <Divider hidden />
        </List.Item>
        <List.Item>
          <p>My name is Lukas. I work in IT for 10 years. </p>
          <p>
            I was Active Directory administrator managing over 2000 users at
            Danone, also worked for Microsoft as Dynamics CRM consultant.
            Created software portfolio and managed software products as Product
            Owner at Polish biggest Microsoft partner APN Promise, for details
            check About page.
          </p>
          <p>
            I work closely with JavaScript for the last year and recently my
            iterests are Blockchain and React technologies. Passionate about
            software architecture and cloud computing. Regular attendee of web
            developer meetups and hackathons.
          </p>
          <p>
            I'm looking for new chalenges as Web Developer. Since this site is
            made using React and Solidity based technologies you can go to my{" "}
            <a
              href="https://github.com/sudollukasz/cv-react-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <List.Icon name="github" />Github repo
            </a>{" "}
            and check sourecode to find out yourself what I can.
          </p>
        </List.Item>
        <Divider hidden />
        <List.Item>
          <Header as="h2" content="Companies I worked for:" />
        </List.Item>
        <Divider hidden />
        <List.Item>
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
        <Segment secondary>
          <List.Item>
            <Header as="h2" content="Skills:" />
          </List.Item>
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
        <Divider hidden />
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
                  Some time ago I started to looking closely at Blockchain
                  technology from developer point of view. My interest was
                  caught by Ethereum, so I decided to create my first Dapp.
                </p>
                <p>
                  At same time I started to refreshing my CV so I decided to
                  connect these 2 ideas. As a result you can now go to "About"
                  tab at the top and read my CV that is located at Ethereum
                  Blockchain (Ropsten network to be exact).
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                <p>
                  I deployed Smart Contract using Truffle and connected it with
                  this webpage. It is still work in progress because so far only
                  I can fully use it (only the owner of Smart Contract can
                  modify it).
                </p>
                <p>
                  {" "}
                  Next stage I'm working on id to share with everyone deployment
                  and modify functionalities.
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

export default Home;
