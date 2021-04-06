import React from 'react';
import { DescriptionList } from '@patternfly/react-core';
import { shallowEqual, useSelector } from 'react-redux';

import EstateRenderer from './estate-renderer';

const flattenSections = (estates) =>
  estates
    /**Give the first item in specific section correct title */
    .map(({ section, items }) =>
      items.map((item, index) =>
        index === 0
          ? {
              ...item,
              shape: {
                ...item.shape,
                section,
              },
            }
          : item
      )
    )
    /** Flatten the array */
    .flat()
    /** Filter out items that do not have id */
    .filter(({ id, ...tile }) => {
      const result = !!id;
      if (!result) {
        console.error(
          `Estate tile ${JSON.stringify(
            tile
          )} does not have required attribute "id" and is excluded`
        );
      }
      return result;
    });

const FirstPanel = () => {
  const estate = useSelector(
    ({ contentStore: { estate } }) => estate,
    shallowEqual
  );
  return (
    <div className="first-panel">
      <DescriptionList>
        <EstateRenderer sections={flattenSections(estate)} />
      </DescriptionList>
    </div>
  );
};

export default FirstPanel;
