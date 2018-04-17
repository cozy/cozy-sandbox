'use strict'

/* eslint-env jest */

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Apps from '../../../src/components/Apps'

Enzyme.configure({ adapter: new Adapter() })

describe('Apps', () => {
  it('should be rendered correctly', () => {
    const component = shallow(<Apps />).getElement()
    expect(component).toMatchSnapshot()
  })
})
