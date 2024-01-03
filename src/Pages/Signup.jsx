
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../Webservice/gatway";
import webUrl from "../Webservice/weburl";





export default function Signup() {
  const navigate = useNavigate()
  const [fullnameError, setfullname,fullname] = useState("");
  const [mobileError, setmobile,mobile] = useState("");
  const [emailError, setEmail, email] = useState("");
  const [passwordError,setPassword, password] = useState("");
  const [user, setUser] = useState({
    fullname: "",
    mobile: "",
    email: "",
    password: ","
  })
  const [isError, setIsError] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
  })
  console.log(user);
  console.log(isError);

  const[masg,setMasg]= useState("");

  function HandleInput(e){
    setUser({...user,[e.target.name]:e.target.value})    
      } 
    
    console.log(user)

  function handleChange(event) {
    const { name, value } = event.target
    switch (name) {
      case "name": (value.length === null) ? setIsError({ ...isError, [name]: "please enter name" }) : (/^[a-zA-Z ]+$/).test(value) ? setIsError("") : setIsError({ ...isError, [name]: "please enter valid name" })
        break;
      case "email": (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(value) ? setIsError("") : setIsError({ ...isError, [name]: "please enter valid email" })
        break;
      case "phone": (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(value) ? setIsError("") : setIsError({ ...isError, [name]: "please enter 10 digit number" })
        break;
      case "password": (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(value) ? setIsError("") : setIsError({ ...isError, [name]: "please enter correct password" })
        break;
      default: isError("")
    }
    setUser({
      ...user, [name]: value
    })
  }

  const handleSubmit= async(e,)=>{
    e.preventDefault();
   
  if(user){
 
 try{
  let userData = JSON.stringify(user)
  let response = await axiosClient.post(webUrl.SIGNUP,userData)
  console.log(response);
  if(response.status===200){
    if(response.data.isActive){
      navigate("/login")
    setMasg(response.data)
    e.target.reset()
    }
  }
  }catch (error){
    console.log(error);
  }
 } else{
  e.preventDefault()
 }
  }

  console.log(masg);
  console.log({passwordError,fullnameError,emailError,mobileError})
  

  ;
  return (<>
  {/* Section: Design Block */}
  <section className="text-center text-lg-start">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
      }}
    />
    {/* Jumbotron */}
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div
            className="card cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)"
            }}
          >
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up </h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        onChange={HandleInput}
                        id="form3Example1"
                        className="form-control"
                        name="fullname"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                         Fullname
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                    onChange={HandleInput}
                        id="form3Example2"
                        className="form-control"
                        name="mobile"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                       Mobile Number
                      </label>
                    </div>
                  </div>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                   onChange={HandleInput}
                    id="form3Example3"
                    className="form-control"
                    name="email"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                     onChange={HandleInput}  
                     
                    id="form3Example4"
                    className="form-control"
                    name="password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example33"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
  {/* Section: Design Block */}


  </>)
}