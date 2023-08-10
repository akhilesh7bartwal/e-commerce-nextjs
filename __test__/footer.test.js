import { render, screen } from '@testing-library/react';
import Footer from '../src/app/Footer'

describe("footer testing", ()=> {
    test("footer test", ()=> {
        render(<Footer />);
        const footerTesting = screen.getByText("Branding");
        expect(footerTesting).toBeInTheDocument();
    })

})