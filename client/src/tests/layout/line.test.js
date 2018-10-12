import React from 'react'
import Line from '../../components/common/Line'
import renderer from 'react-test-renderer'

describe('Line component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Line />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
