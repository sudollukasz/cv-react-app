import React from "react";
import { Grid, Header, Divider, List } from 'semantic-ui-react'

const Experience = (props) => {
    if (props.exp.length === 0) { return null }
    
    const info = props.exp.map((element) => {
            const data = {
                name: element[0],
                begin: element[1],
                end: element[2],
                info: element[3]
            }
            return data
        })
    
    const names = info.map((info, id) => {
        return (
            <div key={id}>
                <Divider hidden />
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {info.begin} - {info.end}
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Header size='medium'>{info.name}</Header>
                            {info.info.split(';').map((duty, id) => <p key={id}>{duty}</p> ) }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    })
        return (
            <div>
                <Divider hidden />
                <Grid>
                    <Grid.Column width={1} />
                    <Grid.Column width={14}>
                    <Header as='h2' dividing>{props.title}</Header>
                    <List size='big'>{names}</List>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

export default Experience;