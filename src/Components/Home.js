import React from 'react';
import { Header } from 'semantic-ui-react'


const Home = () => {
    return(
    <div>
        <Header as='h2' content='Welcome to my page' subheader="My name is Lukas. I work in IT for 10 years. 
        I have worked for Danone as system administrator, for Microsoft as consultant and many more, for details check About page.
        I work closely with JavaScript for the last year and recently my iterests are Blockchain and React technologies.
        I'm looking for new chalenges as Web Developer. Since this site is made using React and Ethereum based technologies
        you can go to my Github repo and check sourecode to find out yourself what I can." />
        <Header as='h2' content='Familiar technologies' subheader="logo: JS, Dynamics CRM, React, Redux, ETH, " />

    </div>
    )};

export default Home;