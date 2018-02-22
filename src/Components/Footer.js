import React from "react";
import { Segment, Divider, Image, Header, Grid } from 'semantic-ui-react'

import EthLogo from './Footer/eth.png'
import TruffleLogo from './Footer/truffle.png'
import InfuraLogo from './Footer/infura.png'
import NodejsLogo from './Footer/nodejs.png'
import ReactLogo from './Footer/react.png'
import ReduxLogo from './Footer/redux.png'
import SemanticLogo from './Footer/semantic.png'


const Footer = () => {
    return (
        <div>
            <Divider hidden />
                <Segment color='blue'>
                <Header as='h3'>Technologies used to build site:</Header>
                    <Segment basic>
                        <Grid>
                            <Grid.Row columns={7}> 
                                <Grid.Column verticalAlign='middle'><Image src={EthLogo} size='tiny' verticalAlign="bottom" /></Grid.Column>
                                <Grid.Column verticalAlign='middle'><Image src={TruffleLogo} size='tiny' /></Grid.Column>
                                <Grid.Column verticalAlign='middle'><Image src={InfuraLogo} size='tiny' /></Grid.Column>
                                <Grid.Column verticalAlign='middle'><Image src={NodejsLogo} size='tiny' /></Grid.Column>
                                <Grid.Column verticalAlign='middle'><Image src={ReactLogo} size='tiny' /></Grid.Column>
                                <Grid.Column verticalAlign='middle'><Image src={ReduxLogo} size='tiny' /></Grid.Column>
                                <Grid.Column verticalAlign='middle'><Image src={SemanticLogo} size='tiny' /></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment>
        </div>
    )
}

export default Footer