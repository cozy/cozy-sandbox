'use strict'

/* eslint-env jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Accounts from '../../../src/components/Accounts'

Enzyme.configure({ adapter: new Adapter() })

describe('Accounts', () => {
  it('should be rendered correctly', () => {
    const component = shallow(<Accounts />).getElement()
    expect(component).toMatchSnapshot()
  })
})
