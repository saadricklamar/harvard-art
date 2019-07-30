import { mount } from '@vue/test-utils'
import Home from '../../views/Home.vue';


describe('Home', () => {
    const wrapper = mount(Home)
    it('should match the snapshot', () => {
        expect(wrapper.isVueInstance()).toMatchSnapshot()
    })
})


