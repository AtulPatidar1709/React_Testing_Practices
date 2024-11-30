import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

// test("should have Jai Shree Ram", () => {
//     render(<App />);
//     const text = screen.getByText("Jai Shree Ram");
//     expect(text).toBeInTheDocument();
// });

// describe('Home test case', () => {
//     test('Should have this test', () => {
//         render(<App />);
//         const text = screen.getByText("Jai Shree Ram");
//         expect(text).toBeInTheDocument();
//     })
// }) 

// test('Input present ', () => {
//     render(<App />);
//     const input = screen.getByRole("textbox");
//     fireEvent.change(input, { target: { value: 'a' } });
//     expect(input.value).toBe("atest")
// })

test('Btn present ', async () => {
    render(<App />);
    const input = screen.getByText("Click Me");
    fireEvent.click(input);
    expect(await waitFor(() => screen.getByText(/Jai Shree Ram/i))).toBeInTheDocument();
}) 