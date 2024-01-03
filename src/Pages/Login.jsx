import { useNavigate } from "react-router-dom";
import axiosClient from "../Webservice/gatway";
import webUrl from "../Webservice/weburl";
import { useState } from "react";


export default function Login(){
  const navigate= useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[user,setUser]=useState({
    email : "",
		password : ""
  })
  const[masg,setMasg]=useState("");

  function HandleInput1(e){
    setUser({...user,[e.target.name]:e.target.value})
  }
  console.log(user)

  const handleSubmit= async(e)=>{
    if(user){
      e.preventDefault()
      try{
        let userData= JSON.stringify(user)
        let response= await axiosClient.post(webUrl.LOGIN,userData)
        if(response.data.status){
          localStorage.setItem("token",response.data.msg)
          setMasg(response.data)
          navigate("/")
          e.target.reset()
        }
      }catch(error){
        console.log(error);
      }
     }else{
     e.preventDefault()
     }
  }
 
 console.log(masg);

    return(<>

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
              <h2 className="fw-bold mb-5">Login </h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    onChange={HandleInput1}
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
                     onChange={HandleInput1}
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
                  login
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>or login with:</p>
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
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/003.jpg"
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