import { mount, createLocalVue } from "@vue/test-utils";
import AvailableCard from "@/components/dashboard/AvailableCard";
import Vuetify from 'vuetify';

describe('AvailableCard', () => {
    const localVue = createLocalVue()

    localVue.use(Vuetify)

    it("should pass props correctly and display them correctly", () => {
        let props = {
            title: "test1",
            startingPrice: 40,
            variance: 0.1,
            rate: 1.003
        };

        let wrapper = mount(AvailableCard, {
            propsData: {
                chosenData: {
                    title: "test1",
                    startingPrice: 40,
                    variance: 0.1,
                    rate: 1.003
                }
            },
            localVue
        })

        expect(wrapper.props().chosenData).toMatchObject(props);
        expect(wrapper.props().chosenData.title).toEqual("test1");
        expect(wrapper.find("#data-title").text()).toEqual(`Title
          test1`);
    })
})