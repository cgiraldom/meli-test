import React from 'react';

import './NotFound.scss';

export const NotFound = (): JSX.Element => (
  <div className="not-found-container">
    <h2 className="not-found-title">Oops...</h2>
    <p>
      We couldn't find any items that matches the text you entered, please try again with a
      different one :)
    </p>
  </div>
);
