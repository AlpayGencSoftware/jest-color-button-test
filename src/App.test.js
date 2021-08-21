import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link',{name :/learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });

test('button has correct initial color', ()=>{
    render(<App/>);
    // Find an element with a role of and text of 'Change to blue'
    const colorButton= screen.getByRole('button', {name :'Change to blue'})

    //Expect to background color  to be red
    expect(colorButton).toHaveStyle({
        backgroundColor:'red'
    });

    // Click button

    fireEvent.click(colorButton);

    // Expect the background color to be blue
    expect(colorButton).toHaveStyle({
        backgroundColor:'blue'
    });

    // Expect the button text to be 'Change to red'

    expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', ()=>{
  
  render(<App/>);
    // Check that the button starts out enabled
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toBeEnabled();
   // Check that the the checkbox starts out unchecked
   const checkbox = screen.getByRole('checkbox', {name: ''});
   expect(checkbox).not.toBeChecked();

});

test('Checkbox disables button on first click and enables on second click',() => {
    render(<App/>);
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
    const colorButton= screen.getByRole('button',{name :'Change to blue'});

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});

test('button turns blue when clicked', ()=>{
    render(<App/>);
    const colorButton= screen.getByRole('button', {name :'Change to blue'});
});
 