

import { mount, createLocalVue } from '@vue/test-utils';
import RegisterForm from "@/components/RegisterForm.vue";
import Vue from 'vue';
import axios from 'axios';


jest.mock('axios', () => ({
    post: jest.fn()
}))

Vue.component('RegisterForm', RegisterForm)

describe('RegisterForm', () => {
    it('should not post to api when there are no valid information', () => {
        const wrapper = mount(RegisterForm)
        const submitButton = wrapper.find('.register-button');

        submitButton.trigger('click');
        expect(axios.post).toNotBeCalled;
    })
})