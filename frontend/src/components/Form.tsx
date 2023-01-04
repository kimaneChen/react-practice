import { useState } from 'react';

import './Form.css';

interface LogState {
  branchId?: string;
  userName?: string;
  password?: string;
}

const initialValues: LogState = {
  branchId: '',
  userName: '',
  password: '',
};

function Form() {
  const [values, setValues] = useState(initialValues);
  return (
    <form className="formContainer">
      <h2 className="formTitle">Login</h2>
      <label className="inputItem">
        <p>Branch Id:</p>
        <input
          type="text"
          name="branchId"
          placeholder="Branch Id"
          value={values?.branchId}
          className="inputBox"
        />
      </label>
      <label className="inputItem">
        <p>User Name:</p>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={values.userName}
          className="inputBox"
        />
      </label>
      <label className="inputItem">
        <p>Password:</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          className="inputBox"
        />
      </label>
    </form>
  );
}

export default Form;
