import React from 'react'
import ContactListItem from '../../components/common/ContactListItem'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('ContactListItem component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ContactListItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
