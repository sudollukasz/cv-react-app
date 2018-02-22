import React from "react";
import { List, Grid, Header, Divider } from 'semantic-ui-react'


const Certifications = (props) => {
    if (props.cert.length === 0) { return null }
    return (
        <div>
            <Grid>
                <Divider hidden />
                <Grid.Row>
                    <Grid.Column width={1} />
                    <Grid.Column width={14}>
                        <List size='big'>
                            <Header as='h2' dividing>Certificates</Header>
                            {props.cert.map((certificate, id) => <List.Item key={id}>{certificate}</List.Item>)}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Divider hidden />
            </Grid>
        </div>
    )
}
export default Certifications;