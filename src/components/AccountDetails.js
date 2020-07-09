import React, { useEffect } from 'react'
import { Grid, Image, Label, Segment, Card, Icon } from 'semantic-ui-react'
import API from "../API"


const LabelExampleRibbon = () => {

    
  return(
    <Grid.Column>
      <Segment raised>
        <Label tag color='red'> Overview  </Label>
        <Label  color='orange'> Account Details </Label>
        <Card centered>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
            <Card.Header></Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
                Daniel is a comedian living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                10 Friends
            </a>
            </Card.Content>
        </Card>    
      </Segment>
    </Grid.Column>
  )
}

export default LabelExampleRibbon

