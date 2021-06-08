import React from 'react'
import PropTypes from 'prop-types'
import Slider from './Slider'

const ListedNames = ({ result }) => (
  <div className="student">
    <h3>{result.name}</h3>
    <Slider result={result} />
  </div>
)

ListedNames.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    assisted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default ListedNames
