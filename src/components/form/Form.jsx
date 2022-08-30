import React, {useEffect, useState} from 'react'


const Form = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
      setFormErrors(validate(formValues))
      setIsSubmit(true)
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) { 
    }
  }, [formErrors])
    const validate = (values) => { 
        const errors = {}
      const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

      if (!values.username) { 
        errors.username ="Username required"
      }
      if (!values.email) { 
        errors.email ="Email required"
      } else if (!regex.test(values.email)){
        errors.email ="Invalid email format"
      }
      if (!values.password) { 
        errors.password ="Password required"
      }
      return errors
    }

  return (
    <div className="container">
      { Object.keys(formErrors).length === 0 && isSubmit ? (<div className='success'>Signed in successfully </div> ) : <div className='success'></div>}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={ handleChange } />
          </div>
          <p>{ formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={formValues.email} onChange={ handleChange } />
          </div>
          <p>{ formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={formValues.password} onChange={ handleChange }/>
          </div>
          <p>{ formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form


