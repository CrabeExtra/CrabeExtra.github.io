import React from 'react';
import { shallow } from 'enzyme';

import { GlobalContainer } from './GlobalContainer';

describe('GlobalContainer', () => {
	it('should render a <div />', () => {
		const container = shallow(<GlobalContainer />);
		expect(container.find('div').length).toEqual(1);
    });
});