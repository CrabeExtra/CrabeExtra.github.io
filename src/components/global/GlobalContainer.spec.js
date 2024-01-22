import React from 'react';
import { render, screen } from "@testing-library/react";

import { GlobalContainer } from './GlobalContainer';

describe('GlobalContainer', () => {
	test('should render the global-container <main />', () => {
		const { container } = render(<GlobalContainer/>);
		expect(container.querySelector('main#global-container')).toBeInTheDocument();
    });
});