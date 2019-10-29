import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Dashboard from '../../src/views/Dashboard';

describe('Dashboard', function () {
    const localVue = createLocalVue();

    localVue.use(Vuetify)

    let wrapper = mount(Dashboard, {
        localVue
    });

    it('has heading dashboard on dashboard page', () => {
        let title = wrapper.find('#dashboard-title')

        expect(title.text()).toBe("Dashboard");
    });

    it('has heading transactions on dashboard page', () => {
        let title = wrapper.find('#transactions')

        expect(title.text()).toBe("Recent Transactions");
    });
});
