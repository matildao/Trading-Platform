import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from 'vuetify';
import SellingCard from "@/components/dashboard/SellingCard";

describe('SellingCard', () => {
    const localVue = createLocalVue();

    localVue.use(Vuetify)

    let wrapper = mount(SellingCard, {
        propsData: {
            stock: [{
                title: "test1",
                startingPrice: 40,
                variance: 0.1,
                rate: 1.003
            }]
        },
        localVue
    })

    it("should pass props correctly", () => {
        expect(wrapper.props().stock).toHaveLength(1);
        expect(wrapper.props().stock[0].title).toEqual("test1");
    })
})