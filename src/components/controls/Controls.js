import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions, handleSelection }) => (
  <section className={styles.Controls}>
    {actions.map((action) => (
      <button key={action.name} onClick={() => handleSelection(action)}>
        {action.name}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default Controls;
