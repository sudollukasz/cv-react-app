import React from 'react';
import { Header, List, Image, Divider } from 'semantic-ui-react';
import headerPhoto from './img/photo.jpeg';

export default () => {
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
            I was Active Directory administrator managing over 2000 users at Danone, also worked for
            Microsoft as Dynamics CRM consultant. Created software portfolio and managed software
            products as Product Owner at Polish biggest Microsoft partner APN Promise, for details
            check About page.
          </p>
          <p>
            I work closely with JavaScript for the last year and recently my iterests are Blockchain
            and React technologies. Passionate about software architecture and cloud computing.
            Regular attendee of web developer meetups and hackathons.
          </p>
          <p>
            I'm looking for new chalenges as Web Developer. Since this site is made using React and
            Solidity based technologies you can go to my{' '}
            <a
              href="https://github.com/sudollukasz/cv-react-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <List.Icon name="github" />Github repo
            </a>{' '}
            and check sourecode to find out yourself what I can.
          </p>
        </List.Item>
        <Divider hidden />
      </List>
    </div>
  );
};
