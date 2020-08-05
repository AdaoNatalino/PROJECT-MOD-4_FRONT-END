import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Responsive,
  Segment,
  Visibility,
} from "semantic-ui-react";


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>

      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
            Welcome to BEERS-LIKERS
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            We Love Beers!
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
            This Website was made for you that, like us, love beers and would like to have a huge amount of options in just one place!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, GET DRUNK responsibly, buy it with us!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="https://porquenaopenseinisso.com.br/wp-content/uploads/2015/01/The-Problem-Solver-beer-cerveja-inteligente-cerveja-criatividade-cerveja-bem-cervejinha-maravilha-vem-ca-cerveja-sua-linda-por-que-nao-pensei-nisso-325x244.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Link to="/beers">
            <Button positive
            size="huge">Check our variety of beers!  </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "We want you to be happy like this!"
            </Header>
            <Image
              centered
              bordered
              rounded
              size="large"
              src="https://i.insider.com/5b8428115c5e5236008b5ab7?width=1100&format=jpeg&auto=webp"
            />
           
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Not like this!"
            </Header>
            <Image
              centered
              bordered
              rounded
              size="large"
              src="https://piximus.net/media/12224/hilarious-drunk-and-wasted-people-2-33.jpg"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: "2em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h2" content="Made by:" />
              <List link inverted>
                <List.Item as="a" href="https://github.com/AdaoNatalino" target="_blank">Adao Natalino</List.Item>
                <List.Item as="a" href="https://github.com/zDougl4s" target="_blank">Douglas Martin</List.Item>
              </List>
            </Grid.Column>
         
            <Grid.Column width={10}>
              <Header as="h1" inverted >
                We are Software Engineers! 
              </Header>
              <Header as="h4" inverted >
                <Icon name='hand point left' />
              </Header>
              <h5>
                Did you like our job?
                We are graduating and looking for jobs.
                Get in contact and hire us!
              </h5>
                <Icon name='react' />
                <Icon name='gem' />
                <Icon name='github' />
                <Icon name='key' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;