import React from 'react'
import NavbarHome from '../../components/layout/NavbarHome'
import renderer from 'react-test-renderer'

describe('NavbarHome component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<NavbarHome />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
