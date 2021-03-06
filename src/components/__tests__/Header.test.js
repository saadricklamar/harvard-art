import { mount } from '@vue/test-utils'
import Header from '../../components/Header.vue';


describe('Header', () => {
    const wrapper = mount(Header)
    it('should match the snapshot', () => {
        expect(wrapper.isVueInstance()).toMatchSnapshot()
    })
})