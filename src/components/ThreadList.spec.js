import React from 'react';
import { shallow } from 'enzyme';

import ThreadList from './ThreadList';

describe('ThreadList', () => {
	it('renders', () => {
		const wrapper = shallow(<ThreadList />);
		expect(wrapper).toBeTruthy();
	});
});
