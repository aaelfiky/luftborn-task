import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders learn react link', () => {
    const sample = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop(up to 15 inches) in the padded sleeve, your every day",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    };
    render(<Card product={sample} key={1} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInThepDocument();
});
