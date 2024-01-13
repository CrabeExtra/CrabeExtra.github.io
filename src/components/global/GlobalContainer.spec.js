import React from 'react';
import { render, screen } from "@testing-library/react";

import { GlobalContainer } from './GlobalContainer';

describe('GlobalContainer', () => {
	test('should render the global-container <div />', () => {
		const { container } = render(<GlobalContainer/>);
		expect(container.querySelector('div#global-container')).toBeInTheDocument();
    });
});