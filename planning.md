# Planning

1. Identify what each view should look like
2. break each view into a hierarchy of components
3. Determine what events happen in the app
4. Determine what data lives in the store

# Views

1. Home Page / Login
2. Dashboard
3. Poll Page
4. Create Poll Page
5. Leaderboard

![Home Page](images/homepage.jpg)
![Dashboard](images/dashboard.jpg)
![Poll Page](images/poll-page.jpg)
![Create Poll Page](images/create-poll-page.jpg)
![Leaderboard](images/leaderboard.jpg)

# Components

- App
- Login Input Form
- Navbar
- authedUser Info
- Polls Container (complete/incomplete)
- Poll Cards
- Poll
- Create Poll
- Leaderboard

# Actions / Reducers

- Verify Login / handleError (homepage)
- Show Polls Buttons (dashboard on Poll Cards)
- Poll Response (On Poll Questions)
- Create a Poll Input Form

# State

- Everything in the store, except:
  - Input Fields in login component and create poll component

# Next Steps

- HTML/CSS
- Actions / Reducers
- Configure Middleware
- Initialize Data
- Build Dashboard View
- Builld Poll View
- Assess and Plan Next Steps

# HTML/CSS

I like to have at least something to render to get me started.

index.js:

    import React from "react";
    import { createRoot } from "react-dom/client";
    import App from "./components/App";

    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<App tab="Home" />);

App.js:

    import React from "react";

    const App = () => {
      return (
        <div className="App">
          <h3>Hello from App.js</h3>
        </div>
      );
    };

    export default App;

# Next Build a Homepage Component

- LoginPage Component
  - Title/Logo/Subtitle Component (perhaps call it 'Hero' component)
  - Login Form Component

We want to align everything centrally for this app:

    //index.css

    .hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

![Login Initial Styling](images/login-view.jpg)
