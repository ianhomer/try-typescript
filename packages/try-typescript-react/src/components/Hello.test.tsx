import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Hello from './Hello';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello compiler="TypeScript" framework="React"/>, div);
});