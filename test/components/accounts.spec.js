'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import Accounts from 'components/Accounts'

describe('Accounts', () => {
  it('should be rendered correctly', () => {
    const component = shallow(<Accounts />).getElement()
    expect(component).toMatchSnapshot()
  })
})
