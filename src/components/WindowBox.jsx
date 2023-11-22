import React from 'react';
import PropTypes from 'prop-types';
import styles from './WindowBox.module.css';

function WindowBox({ title, icon, children, width }) {
  return (
    <div id="window" className={styles.window} style={{ width }}>
      <div id="window-toolbar" className={styles.toolbar}>
        <div id="window-icon" className={styles.icon}>
          {icon}
        </div>
        <span>{title}</span>
      </div>
      <div id="window-content" className={styles.content}>
        {children}
      </div>
    </div>
  );
}

WindowBox.defaultProps = {
  width: 600,
};

WindowBox.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
};

export default WindowBox;
