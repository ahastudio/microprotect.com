/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import Title from './Title';
import DonationBox from './DonationBox';

import {
  BASE_MQ,
  CONTENT_PADDING,
  backgroundColor,
} from '../../styles/constants-v4';

const styles = {
  container: {
    position: 'relative',
    marginTop: '-15vw',
    width: '100%',
    overflow: 'hidden',
    [BASE_MQ]: {
      marginTop: '-200px',
    },
  },
  padding: {
    marginLeft: `-${50 / 2}%`,
    width: '150%',
    height: '50vw',
    padding: `7vw ${50 / 2}% 0`,
    boxShadow: '0 0 14px 0 rgba(200, 200, 200, 0.5)',
    background: backgroundColor,
    borderRadius: '100%',
  },
  content: {
    marginTop: '-37vw',
    padding: '0 5% 10px',
    background: backgroundColor,
    [BASE_MQ]: {
      marginTop: '-43vw',
      padding: `0 ${CONTENT_PADDING} 10px`,
    },
  },
};

export default function Donation({ t }) {
  return (
    <div css={styles.container}>
      <div css={styles.padding} />
      <div css={styles.content}>
        <Title value={t.donation_title} />
        <DonationBox t={t} />
      </div>
    </div>
  );
}
