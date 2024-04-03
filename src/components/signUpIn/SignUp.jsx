import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    fetch(`http://localhost:3001/users?email=${email}`)
      .then((res) => res.json())
      .then((user) => {
        if (user.length) {
          setError(true);
          //   console.log(user);
        }
      });
  }, [email]);

  //   console.log(email);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form>
            <div className=" form-group ">
              <input
                onChange={(e) => e.preventDefault(setEmail(e.target.value))}
                type="email"
                className="form-control "
                id="emailInput"
                placeholder="Enter email"
              />
              {error ? (
                <small className="text-danger ">This email is taken</small>
              ) : null}
            </div>
            <div className=" form-group ">
              <input
                type="password"
                className="form-control "
                id="passwordInput"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary ">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// <div className=" form-group form-check  ">
//   <input
//     type="checkbox"
//     className="form-check-input  "
//     id="checkInput"
//   />
//   <label for="checkInput">Check me out</label>
// </div>
