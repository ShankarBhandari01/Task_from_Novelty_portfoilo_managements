import { Component } from "react"
import { FaRegHandPointRight } from 'react-icons/fa'
import axios from 'axios'
class Login extends Component {
    state = {
        email: "",
        password: "",
        checkLogin: false,
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginUser = (e) => {
        e.preventDefault(); // prevents from reloading page
        if (this.state.email === "") {
            alert("please enter your email");
            return
        }
        else if (this.state.password === "") {
            alert("please enter your password");
            return
        }

        axios.post("http://localhost:90/login", this.state)
            .then(
                (response) => {
                    if (response.data.status === false) {
                        alert(response.data.message);
                        
                    }
                    else {
                        localStorage.setItem('name', response.data.data.name)
                        localStorage.setItem('token', response.data.token)
                        this.setState({
                            checkLogin:true
                        })
                    }
                }

            )
            .catch(
                (err) => {
                    alert(err)
                }
            )

    }

    render() {
        if (this.state.checkLogin === true) {
            return window.location.href = "/dashboard"
        }
        return (
            <section className="Form my-2 mx-2 pt-2 pb-2">
                <div className="container-fluid h-100">
                    <div className="row h-100 justify-content-center align-items-center pt-5" >
                        <div className="col-lg-5 no-gutters shadow" style={{ background: 'white', padding: "30px", borderRadius: '5px' }}>

                            <h1 className="font-weight-bold py-4" style={{ fontWeight: "bolder", fontSize: "35px", color: "#a018a0", fontFamily: "roboto" }}>Login</h1>
                            <form>
                                <div className="form-row ">
                                    <div className="col-lg-12">
                                        <label htmlFor="uname" style={{ fontFamily: "roboto", fontSize: "20px" }}>Email:</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.changeHandler} name="email" placeholder="someone@gmail.com"required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-12">
                                        <label htmlFor="pwd" style={{ fontFamily: "roboto", fontSize: "20px" }}>Password:</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.changeHandler} placeholder="Your password" name="password" required />
                                    </div>
                                </div>

                            </form>
                            <div className="form-row ">
                                <div className="col-lg-5">
                                    <button style={{ backgroundColor: "#51227F", color: "white", fontWeight: "bold", marginTop: "10px", border: 'none', fontFamily: "roboto", fontSize: "18px" }} type="submit" onClick={this.loginUser} className="btn btn-primary"> Sign in <FaRegHandPointRight /> </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </section >



        )
    }
}
export default Login;
