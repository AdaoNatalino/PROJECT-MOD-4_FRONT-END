import React, { useEffect } from 'react'
import { Grid, Image, Label, Segment, Card, Icon } from 'semantic-ui-react'
import API from "../API"


const LabelExampleRibbon = ({ user }) => {

  return(
    
    <Grid.Column>
      <Segment raised>
        <Label tag color='red'> Overview  </Label>
        <Label  color='orange'> Account Details </Label>
        <Card centered>
            <Image src='https://miro.medium.com/fit/c/336/336/2*hVMHEg2qGIlBJGKUSS8VIQ.jpeg' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{user}</Card.Header>
            <Card.Meta>I'm here to get drunk</Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' /> Edit 
            </a>
            </Card.Content>
        </Card>    
      </Segment>
    </Grid.Column>
   
  )
  
}

export default LabelExampleRibbon

