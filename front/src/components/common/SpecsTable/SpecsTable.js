// React
import React from 'react';

// Styled Components
import { Table, Item, Name, Value } from './styles';

// External Packages
import PropTypes from 'prop-types';

const SpecsTable = ({ data }) => {
  return (
    <Table>
      {data.map((item) => (
        <Item>
          <Name>{item.name}</Name>
          <Value>{item.value}</Value>
        </Item>
      ))}
    </Table>
  );
};

SpecsTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default SpecsTable;
