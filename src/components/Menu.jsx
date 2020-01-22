/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import { mq } from '../styles/utils';
import { listContainer, listItem } from '../styles/list';

const styles = {
  container: {
    zIndex: 10000,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 0,
    overflow: 'hidden',
    transition: '.1s',
  },
  containerOpen: {
    height: '100%',
  },
  background: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  bgColumn: {
    width: '25%',
    height: 0,
    background: '#181818',
    transition: 'ease-in',
  },
  bgColumns: [
    { transition: '.1s' },
    { transition: '.3s' },
    { transition: '.5s' },
    { transition: '.6s' },
  ],
  bgColumnOpen: {
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: '3em',
    left: 0,
    width: '100%',
    color: '#FFF',
    '& a': {
      color: '#FFF',
      textDecoration: 'none',
      fontSize: '12vw',
      [mq(640)]: {
        fontSize: '8vw',
      },
      '&:hover': {
        color: '#44d4c3',
      },
    },
  },
  menuList: {
    ...listContainer,
    marginLeft: '5%',
    width: '60%',
    [mq(640)]: {
      width: 'auto',
    },
  },
  menuItem: {
    ...listItem,
    margin: '3em 0',
  },
};

export default function Menu({ open }) {
  return (
    <div css={[
      styles.container,
      open ? styles.containerOpen : {},
    ]}
    >
      <div css={styles.background}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            css={[
              styles.bgColumn,
              styles.bgColumns[i],
              open ? styles.bgColumnOpen : {},
            ]}
          />
        ))}
      </div>
      <div css={styles.content}>
        <ul css={styles.menuList}>
          <li css={styles.menuItem}>
            <a
              href="/"
            >
              Free Insurance
            </a>
          </li>
          <li css={styles.menuItem}>
            <a
              href="/"
            >
              Subscription Insurance
            </a>
          </li>
          <li css={styles.menuItem}>
            <a
              href="/"
            >
              About us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
