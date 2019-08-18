import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}> 
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              type="image"
              src={require("./rocketman.png")}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Andrew Hughes</h1>
              <hr/>
              <p> Arduino | C++ | Java | Node.js | Python </p>
              {/* External links */}
              <div className="links">
                <a href="https://github.com/andrewhughes101" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/andrewhughes101" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="mailto:andrew.hughes.101@outlook.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;