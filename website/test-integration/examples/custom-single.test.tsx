import React from 'react';

import { render } from '@testing-library/react';

import { clickDay } from 'react-day-picker/test/actions';
import { getDayButton, getTableFooter } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/custom-single';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when a day is clicked', () => {
  const day = new Date(2021, 10, 1);
  beforeEach(() => clickDay(day));
  test('should appear as selected', () => {
    expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You selected Mon Nov 01 2021.');
  });
});
