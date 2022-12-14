import { render, screen, cleanup } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Page2 from '../page2'

test('should render survey and submit button', () => { 
    render(<Page2 />) 
    const slider1 = screen.getByTestId("slider1") 
    expect(slider1).toBeInTheDocument() 

    const slider2 = screen.getByTestId("slider2") 
    expect(slider2).toBeInTheDocument() 

    const slider3 = screen.getByTestId("slider3") 
    expect(slider3).toBeInTheDocument() 

    const slider4 = screen.getByTestId("slider4") 
    expect(slider4).toBeInTheDocument() 

    const slider5 = screen.getByTestId("slider5") 
    expect(slider5).toBeInTheDocument() 

    const slider6 = screen.getByTestId("slider6") 
    expect(slider6).toBeInTheDocument() 

    const slider7 = screen.getByTestId("slider7") 
    expect(slider7).toBeInTheDocument() 

    const slider8 = screen.getByTestId("slider8") 
    expect(slider8).toBeInTheDocument() 

    const slider9 = screen.getByTestId("slider9") 
    expect(slider9).toBeInTheDocument() 

    const submit = screen.getByTestId("survey-submit") 
    expect(submit).toBeInTheDocument() 
}) 