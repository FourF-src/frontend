import React from 'react';
import styles from './index.css';
import {Container} from '@material-ui/core';
import TopBar from '@/components/topbar';
import Foot from '@/components/foot';
const BasicLayout: React.FC = props => {
  return (
    <div>
      <TopBar></TopBar>
      <Container maxWidth="lg" style={{paddingTop: 40}}>
      {props.children}
      </Container>
      <Foot />
    </div>
  );
};

export default BasicLayout;
