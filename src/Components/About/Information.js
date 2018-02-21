import React from "react";
import { List, Grid, Header, Divider } from 'semantic-ui-react'

const Information = (props) => {

    if (props.info.length === 0) { return null }
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <List>
                            <Header as='h3' dividing>{props.title}</Header>
                            {props.info.map((information, id) => <List.Item key={id}>{information}</List.Item>)}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Divider hidden />
            </Grid>
        </div>
    )
}
export default Information;