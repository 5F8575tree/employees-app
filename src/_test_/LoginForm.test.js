import { React } from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import LoginForm from '../components/LoginForm';

import '@testing-library/jest-dom';

const localStorageMock = (function() {
  let store = {}

  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})


const mockData = {
  dispatch: jest.fn(),
  navigate: jest.fn(),
  state: {
    users: {
      users: {
        0: {
          id: 'test-user',
          password: 'secret123'
        },
      }
    }
  }
}

jest.mock("react-redux", () => ({
  useDispatch: () => mockData.dispatch,
  useSelector: (cb => {
    const result = cb(mockData.state)
    return result;
  })
}))

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockData.navigate
}))

describe('LoginForm', () => {
  /**
   * Snapshot Testing
   */
  it("renders the LoginForm component snapshot", () => {
    const { asFragment } = render(
      <LoginForm />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  /**
   * Check the form is displayed with correct fields
   */
  it('should display login form to the user',  () => {
    render(<LoginForm />)

    // heading or title
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument()

    // username label and field
    const usernameLabel = screen.getByText('Username');
    expect(usernameLabel).toBeInTheDocument();

    const usernameField = screen.getByLabelText('Username');
    expect(usernameField).toBeInTheDocument();

    // password label and field
    const passwordLabel = screen.getByText('Password');
    expect(passwordLabel).toBeInTheDocument();

    const passwordField = screen.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();

    // submit button
    const submitButton = screen.getByTestId('submitButton');
    expect(submitButton).toBeInTheDocument();

    // signup link
    const signupLink = screen.getByTestId('signupLink');
    expect(signupLink).toBeInTheDocument();

    // copyright notice
    const copyrightNotice = screen.getByTestId('copyrightNotice');
    expect(copyrightNotice).toBeInTheDocument();
  })

  /**
   * Enter username and password in the form
   */
  it('allows user to enter data in input fields', () => {
    render(<LoginForm />)

    const mockedCreds = {
      username: 'test-user',
      password: 'test-123'
    }

    const usernameField = screen.getByLabelText('Username');
    expect(usernameField).toBeInTheDocument();

    fireEvent.input(usernameField, {
      target: {
        value: mockedCreds.username
      }
    })

    const passwordField = screen.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();

    fireEvent.input(passwordField, {
      target: {
        value: mockedCreds.password
      }
    })

    const filledUsernameField = screen.getByDisplayValue(mockedCreds.username);
    expect(filledUsernameField).toBeInTheDocument();

    const filledPasswordField = screen.getByDisplayValue(mockedCreds.password);
    expect(filledPasswordField).toBeInTheDocument();
  })

  /**
   * Validate the form before submitting
   */
  it('should validate the user inputs before submitting the form', () => {
    render(<LoginForm />)

    const usernameField = screen.getByLabelText('Username');
    expect(usernameField).toBeInTheDocument();

    const passwordField = screen.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();

    const submitButton = screen.getByTestId('submitButton');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(mockData.dispatch).not.toHaveBeenCalled()
  });

  /**
   * Validate user credentials before redirecting
   */
   it('should validate the credentials before redirecting to dashboard ', () => {
    render(<LoginForm />)

    const mockedCreds = {
      username: 'test-user',
      password: 'secret1234'
    }

    const consoleLogSpy = jest.spyOn(console, 'log');

    const usernameField = screen.getByLabelText('Username');
    expect(usernameField).toBeInTheDocument();

    fireEvent.input(usernameField, {
      target: {
        value: mockedCreds.username
      }
    })

    const passwordField = screen.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();

    fireEvent.input(passwordField, {
      target: {
        value: mockedCreds.password
      }
    })

    const submitButton = screen.getByTestId('submitButton');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(consoleLogSpy).toHaveBeenCalledWith("wrong password");
  });

  /**
   * Show allow user to submit the form after entering the valid values
   */
   it('should allow the user to submit the form with valid credentials', () => {
    const mockedCreds = {
      username: 'test-user',
      password: 'secret123'
    }

    const localStorageSpy = jest.spyOn(window.localStorage, 'setItem');

    render(<LoginForm />)

    const usernameField = screen.getByLabelText('Username');
    expect(usernameField).toBeInTheDocument();

    fireEvent.input(usernameField, {
      target: {
        value: mockedCreds.username
      }
    })

    const passwordField = screen.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();

    fireEvent.input(passwordField, {
      target: {
        value: mockedCreds.password
      }
    })

    const submitButton = screen.getByTestId('submitButton');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(mockData.dispatch).toHaveBeenCalled();
    expect(mockData.navigate).toHaveBeenCalledWith("/Dashboard");
    expect(localStorageSpy).toHaveBeenCalledWith("authedUser", mockedCreds.username)
  });
})