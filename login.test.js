import { render, screen, cleanup } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import { type } from '@testing-library/user-event/dist/type';
import App from './App';

test('nothing entered', async () => {
    render(<App />)
    let email = screen.getByTestId('email')
    let password = screen.getByTestId('password')
    expect(email.classList.contains('is-valid')).toBe(false)
    expect(email.classList.contains('is-invalid')).toBe(false)
    expect(password.classList.contains('is-valid')).toBe(false)
    expect(password.classList.contains('is-invalid')).toBe(false)
    let button = screen.getByText(/Submit/)
    click(button)
    expect(email.classList.contains('is-valid')).toBe(false)
    expect(email.classList.contains('is-invalid')).toBe(true)
    expect(password.classList.contains('is-valid')).toBe(false)
    expect(password.classList.contains('is-invalid')).toBe(true)
})

test('correct email entered', async () => {
    render(<App />)
    let email = screen.getByTestId('email')
    let password = screen.getByTestId('password')
    expect(email.classList.contains('is-valid')).toBe(false)
    expect(email.classList.contains('is-invalid')).toBe(false)
    expect(password.classList.contains('is-valid')).toBe(false)
    expect(password.classList.contains('is-invalid')).toBe(false)
    type(email, 'john.smith@iastate.edu')
    let button = screen.getByText(/Submit/)
    click(button)
    expect(email.classList.contains('is-valid')).toBe(true)
    expect(email.classList.contains('is-invalid')).toBe(false)
    expect(password.classList.contains('is-valid')).toBe(false)
    expect(password.classList.contains('is-invalid')).toBe(true)
})

test('correct password entered', async () => {
    render(<App />)
    let email = screen.getByTestId('email')
    let password = screen.getByTestId('password')
    expect(email.classList.contains('is-valid')).toBe(false)
    expect(email.classList.contains('is-invalid')).toBe(false)
    expect(password.classList.contains('is-valid')).toBe(false)
    expect(password.classList.contains('is-invalid')).toBe(false)
    type(password, '1234')
    let button = screen.getByText(/Submit/)
    click(button)
    expect(email.classList.contains('is-valid')).toBe(false)
    expect(email.classList.contains('is-invalid')).toBe(true)
    expect(password.classList.contains('is-valid')).toBe(true)
    expect(password.classList.contains('is-invalid')).toBe(false)
})

test('both entered', async () => {
    render(<App />)
    let email = screen.getByTestId('email')
    let password = screen.getByTestId('password')
    expect(email.classList.contains('is-valid')).toBe(false)
    expect(email.classList.contains('is-invalid')).toBe(false)
    expect(password.classList.contains('is-valid')).toBe(false)
    expect(password.classList.contains('is-invalid')).toBe(false)
    type(email, 'john.smith@iastate.edu')
    type(password, '1234')
    let button = screen.getByText(/Submit/)
    click(button)
    expect(email.classList.contains('is-valid')).toBe(true)
    expect(email.classList.contains('is-invalid')).toBe(false)
    expect(password.classList.contains('is-valid')).toBe(true)
    expect(password.classList.contains('is-invalid')).toBe(false)
})