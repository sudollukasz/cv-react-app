import React from "react";
import { Grid, Header, Divider } from 'semantic-ui-react'

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
                        <Grid.Column width={4}>
                            {info.begin} - {info.end}
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Header size='small'>{info.name}</Header>
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
                <Header as='h3' dividing>{props.title}</Header>
                {names}
            </div>
        )
    }

export default Experience;