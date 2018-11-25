'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import Apps from 'components/Apps'

describe('Apps', () => {
  it('should be rendered correctly', () => {
    const component = shallow(<Apps />).getElement()
    expect(component).toMatchSnapshot()
  })
})
