import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-colour" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>}scroll>
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href="./Andrew_Hughes_CV.pdf" target="blank">CV</a>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
  </div>
  );
}

export default App;
