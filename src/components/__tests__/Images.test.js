import { mount } from '@vue/test-utils'
import Images from '../../views/Images'
jest.mock('fetch')

describe('Images', () => {
    const wrapper = mount(Images)
    it('should match the snapshot', () => {
        
        expect(wrapper.isVueInstance()).toMatchSnapshot()
    })
})
