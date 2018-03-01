import React from 'react';
import { shallow } from 'enzyme';

import ThreadListItem from './ThreadListItem';

describe('ThreadListItem', () => {
	it('renders', () => {
		const wrapper = shallow(<ThreadListItem />);
		expect(wrapper).toBeTruthy();
	});
});
