/**
*
* SubHeader
*
*/

import React from 'react';
import { Button, Popconfirm, Row, Col, Icon } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LockButton from 'components/LockButton';
import IconButton from 'components/IconButton';

const Div = styled.div`
  margin-top: 20px;
  .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
  }

  .anticon-lock {
    color: red;
  }
  .anticon-unlock {
    color: blue;
  }
`;

function SubHeader(props) {
  const {
    onGenerateWallet, onShowRestoreWallet, isComfirmed, onCloseWallet,
    onLockWallet, password, onUnlockWallet,
    /* optional laod / save buttons
     onSaveWallet, saveWalletLoading, saveWalletError,
     onLoadWallet, loadWalletLoading, loadWalletError, */
  } = props;

  const lockButtonProps = { onLockWallet, password, onUnlockWallet };

  const noWalletSubHeader = [
    <Row key="0">
    
    <Col xs={{span: 20, push: 2}}  sm={{span: 20, push: 2}}  md={{span: 10, push: 2}}  lg={{span: 9, push: 3}}  xl={{span: 6, push: 6}}>
        <div role="button" key="new_wallet" onClick={onGenerateWallet} className="card-colored" style={{ backgroundColor: '#5a78f0' }}>
          <h2 style={{ color: 'white', fontSize: 24 }}>Get a Free Wallet</h2>
          <p>To obtain ETH address and generate your private key. Saving and safekeeping the key will be your responsibility.</p>
          <p className="bold">Get Started   <Icon type="arrow-right" /></p>
        </div>
      </Col>

      <Col xs={{span: 20, push: 2}}  sm={{span: 20, push: 2}}  md={{span: 10, push: 2}}  lg={{span: 9, push: 3}}  xl={{span: 6, push: 6}}>
        <div role="button" key="restore_wallet" onClick={onShowRestoreWallet} className="card-colored" style={{ backgroundColor: '#05c0a5' }}>
          <h2 style={{ color: 'white', fontSize: 24 }}>Access My Wallet</h2>
          <p>To send Ethereum and tokens, swap coins, sale the domain, deploy the contract after you access your wallet.</p>
          <p className="bold">Access Now  <Icon type="arrow-right" /></p>
        </div>
      </Col>

    </Row>
    /* optional laod / save buttons
     <IconButton
      key="load"
      text="Load from storage"
      icon="upload"
      onClick={onLoadWallet}
      loading={loadWalletLoading}
      error={loadWalletError}
    />,*/
  ];

  const existingWalletSubHeader = [
    <LockButton key="lock_button" {...lockButtonProps} />,
    <Popconfirm key="close_wallet" placement="bottom" title="Wallet will be deleted from memory and LocalStorage" onConfirm={onCloseWallet} okText="Confirm" cancelText="Abort">
      <Button key="close_wallet" type="default" icon="close-square-o" size="large">
        Close wallet
      </Button>
    </Popconfirm>,
    /* optional laod / save buttons
    <IconButton
      key="save"
      text="Save to disk"
      icon="download"
      onClick={onSaveWallet}
      loading={saveWalletLoading}
      error={saveWalletError}
      popconfirmMsg="Encrypted wallet will be saved to browser localStorage"
    />, */
  ];


  const subHeader = isComfirmed ? existingWalletSubHeader : noWalletSubHeader;

  return (
    <Div>
      {subHeader}
    </Div>
  );
}

SubHeader.propTypes = {
  onGenerateWallet: PropTypes.func,
  onShowRestoreWallet: PropTypes.func,
  isComfirmed: PropTypes.bool,
  onCloseWallet: PropTypes.func,
  onLockWallet: PropTypes.func,
  password: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onUnlockWallet: PropTypes.func,
  /* optional laod / save buttons
  onSaveWallet: PropTypes.func,
  saveWalletLoading: PropTypes.bool,
  saveWalletError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
   onLoadWallet: PropTypes.func,
  loadWalletLoading: PropTypes.bool,
  loadWalletError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]), */
};

export default SubHeader;
