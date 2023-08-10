//import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { render,screen,fireEvent, waitFor } from '@testing-library/react';
const { describe } = require("node:test");
import NotFoundPage from '../src/app/not-found';

describe('testing', ()=> {
    test("render test", ()=> {
        render(<NotFoundPage />);
        const renderElement = screen.getByText("Page Not Found");
        expect(renderElement).toBeInTheDocument();
    })
})