import React from 'react'
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview' >
    <h1 className='collection-preview__title'>{title.toUpperCase()}</h1>
    <div className='collection-preview__content'>
      {
        items.map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;