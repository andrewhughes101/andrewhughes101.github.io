import React, { Component} from 'react';
import { Tabs, Tab } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div><h1>This is Arduino</h1></div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is University</h1></div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs"> 
        <Tabs activeTabs={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
          <Tab>Arduino</Tab>
          <Tab>University</Tab>
        </Tabs>
        <div className="content">{this.toggleCategories()}</div>
      </div>
    )
  }
}

export default Projects;