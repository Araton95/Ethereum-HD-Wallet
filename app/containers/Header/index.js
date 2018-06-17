/**
 *
 * Header
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Row, Col } from 'antd';


import NetworkIndicator from 'components/NetworkIndicator';
import Logo from 'components/Logo';
import NetworkMenu from 'components/NetworkMenu';

import {
  makeSelectNetworkReady,
  makeSelectLoading,
  makeSelectError,
  makeSelectNetworkName,
  makeSelectBlockNumber,
  makeSelectAvailableNetworks,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadNetwork } from './actions';

const HeaderWrapped = styled.header`
  transition: opacity 0.5s;
  margin-bottom: 30px;
  padding: 0;
  width: 100%;
  font-size: 16px;
`;

function Header(props) {
  const {
    loading,
    error,
    networkName,
    blockNumber,
    availableNetworks,
    onLoadNetwork,
   } = props;

  const networkIndicatorProps = {
    loading,
    error,
    blockNumber,
  };

  const networkMenuProps = {
    availableNetworks,
    networkName,
    onLoadNetwork,
  };

  return (
    <HeaderWrapped className="clearfix">
      <Row type="flex" align="middle" justify="space-between" style={{ backgroundColor: '#fff' }}>
        <Col sm={{ span: 6, offset: 1 }} xs={24}>
          <Logo />
        </Col>
        <Col sm={{ span: 8, offset: 2 }} xs={24}>
          <Row type="flex" align="middle" justify="center">
            <NetworkIndicator {...networkIndicatorProps} />
            <NetworkMenu {...networkMenuProps} />
          </Row>
        </Col>
      </Row>
    </HeaderWrapped>
  );
}

Header.propTypes = {
  onLoadNetwork: PropTypes.func.isRequired,
  // onCheckBalances: PropTypes.func.isRequired,

  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  networkName: PropTypes.string,
  availableNetworks: PropTypes.object,
  blockNumber: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  networkReady: makeSelectNetworkReady(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  networkName: makeSelectNetworkName(),
  availableNetworks: makeSelectAvailableNetworks(),
  blockNumber: makeSelectBlockNumber(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadNetwork: (name) => {
      dispatch(loadNetwork(name));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header);
