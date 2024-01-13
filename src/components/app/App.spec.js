import React from 'react';
import { render, screen } from "@testing-library/react";

import App from '../../App';

describe('App', () => {
	it('should render a <div />', () => {
		const { container } = render(<App/>);
		expect(container.querySelector('div')).toBeInTheDocument();
    });
});