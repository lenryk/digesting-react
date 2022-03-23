import React from 'react'

function Step1(props) {
  return props.currentStep !== 1 ? null : (
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
        />
      </div>
  )
}

function Step2(props) {
  return props.currentStep !== 2 ? null : (
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={props.username}
            onChange={props.handleChange}
        />
      </div>
  )
}

function Step3(props) {
  return props.currentStep !== 3 ? null : (
      <>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={props.password}
              onChange={props.handleChange}
          />
        </div>
        <button
            className="btn btn-success float-right"
        >
          Sign up
        </button>
      </>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: ''
    }
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
          <button
              className="btn btn-primary float-right"
              type="button"
              onClick={this.next}
          >
            Next
          </button>
      );
    }
    return null;
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      return (
          <button
              className="btn btn-secondary"
              type="button"
              onClick={this.prev}
          >
            Previous
          </button>
      );
    }
    return null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n
        Email: ${email} \n
        Username: ${username} \n
        Password: ${password}`);
  };


  render() {
    return (
        <div className="wizard">
          <h1>React Wizard Form</h1>
          <p>Step {this.state.currentStep}</p>
          <form onSubmit={this.handleSubmit}>
            <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
            />
            <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                username={this.state.username}
            />
            <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                password={this.state.password}
            />
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </div>
    )
  }
}

export default App