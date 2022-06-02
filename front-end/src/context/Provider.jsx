import React from 'react';
import PropTypes from 'prop-types';
import Mycontext from './Mycontext';

const Provider = ({ children }) => (
  <Mycontext.Provider>
    {children}
  </Mycontext.Provider>
);

Provider.propTypes = {
  children: PropTypes.objectOf([
    PropTypes.element,
    PropTypes.symbol,
  ]).isRequired,
};

export default Provider;
