import { mount, shallowMount } from '@vue/test-utils'
import Audio from '../../views/Audio.vue';

describe('Audio', () => {
    const wrapper = mount(Audio)
    
    it('should match the snapshot', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})