import React, { PropTypes } from 'react'

import Item from '../Item'

const ItemList = ({ items }) => (
  <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
    {items.map(
      (item, key) =>
        <Item
          {...item}
          {...{key}}
        />)
    }
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.array
}

export default ItemList
