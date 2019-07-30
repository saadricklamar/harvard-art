import { mount, shallowMount } from '@vue/test-utils'
import Images from '../../views/Images'



describe('Images', () => {
    let fetch = jest.fn()
    const wrapper = mount(Images, {
        name: 'Images', data: jest.fn(), mounted: jest.fn(fetch)
    })
    it('should match the snapshot', () => {
        expect(wrapper.isVueInstance()).toMatchSnapshot()
    })
})
