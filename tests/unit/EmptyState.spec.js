import { mount, createLocalVue } from "@vue/test-utils";
import EmptyState from "@/components/EmptyState";
import Vuetify from 'vuetify';

describe('AvailableCard', () => {
    const localVue = createLocalVue()

    localVue.use(Vuetify)

    it("should pass props correctly and use them in emptystate", () => {
        let props = {
            title: "test",
            description: "testdescription",
            icon: "house"
        };

        let wrapper = mount(EmptyState, {
            propsData: {
                title: "test",
                description: "testdescription",
                icon: "house"
            },
            localVue
        })

        expect(wrapper.props()).toMatchObject(props);
        expect(wrapper.find("#title").text()).toEqual(props.title);
        expect(wrapper.find("#description").text()).toEqual(props.description);
    })
})