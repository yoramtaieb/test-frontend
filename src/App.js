import React, { useState } from "react";

function App() {
  let initialState = { firstName: "", lastName: "", email: "", password: "" };

  let [state, setState] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form_login">
      <div className="container_firstName">
        <label aria-label="firstName" htmlFor="firstName">
          Prénom
        </label>
        <input type="text" name="firstName" onChange={handleChange} required />
      </div>
      <div className="container_lastName">
        <label aria-label="lastName" htmlFor="lastName">
          Nom
        </label>
        <input type="text" name="lastName" onChange={handleChange} required />
      </div>
      <div className="container_email">
        <label aria-label="email" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>
      <div className="container_mdp">
        <label aria-label="password" htmlFor="password">
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </div>
      <button>Envoyer</button>
    </form>
  );
}

export default App;
