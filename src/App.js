import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import pdf from './Andrew_Hughes_CV.pdf';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-colour" title={<span><Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link></span>}>
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <a href={pdf} rel="noopener noreferrer" target="_blank">CV</a>
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
