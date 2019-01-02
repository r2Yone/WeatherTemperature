import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Ciudad de México,mx',
  'New York,us',
  'Washington,us',
  'Bogota,col',
  'Madrid,es',
  'Lima,pe',
]

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`App: handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>    
          <Col xs={12} md={6} className="cols">
            <Paper zDepth={4} elevation={4}>
              <div className="details">
              <ForecastExtended></ForecastExtended>
              </div>
            </Paper>
          </Col>
        </Row>
        
      </Grid>
    );
  }
}

export default App;
