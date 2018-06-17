/**
*
* PageFooter
*
*/

import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
          {/* TODO: */}
      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
