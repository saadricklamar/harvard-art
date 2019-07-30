import { mount } from '@vue/test-utils'
import Galleries from '../../views/Galleries';


describe('Galleries', () => {
    const wrapper = mount(Galleries)
    it.skip('should match the snapshot', () => {
        expect(wrapper.isVueInstance()).toMatchSnapshot()
    })
})
