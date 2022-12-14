import React from "react";
import DB from './db.json';
import './login.css';

class Login extends React.Component {

    nextPage(user, userID) {
        let value = Math.round((Date.now() - DB.startTime[0].value) / 1000);
        let id = DB.timeUsed[DB.timeUsed.length - 1].id + 1;
        let newTime = { value, id };
        fetch('http://localhost:8000/timeUsed', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTime)
        }).then(() => {
            fetch('http://localhost:8000/timeUsed/' + (DB.timeUsed[0].id), {
                method: 'DELETE'
            }).then(() => {
                if (user === 'A') {
                    localStorage.setItem("userID", userID);
                    this.props.nextPage(2);
                } else {
                    localStorage.setItem("userID", userID);
                    this.props.nextPage(3);
                }
            })
        });
    }

    verify() {
        let email = document.getElementById('exampleInputEmail1');
        let password = document.getElementById('exampleInputPassword1');
        let emailFound = false;
        let passwordFound = false;
        for (let i = 0; i < DB.accounts.length; i++) {
            let element = DB.accounts[i];
            if (element.email === email.value) {
                emailFound = true;
            }
            if (element.password === password.value) {
                passwordFound = true;
            }
            if (emailFound && passwordFound) {
                if (element.id.charAt(0) === 'A') {
                    this.nextPage('A', element.id);
                } else {
                    this.nextPage('B', element.id);
                }
                break;
            }
        }
        email.classList.remove('is-valid');
        email.classList.remove('is-invalid');
        password.classList.remove('is-valid');
        password.classList.remove('is-invalid');
        if (!emailFound) {
            email.classList.add('is-invalid');
        } else {
            email.classList.add('is-valid');
        }
        if (!passwordFound) {
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
        }
    }

    //only used for testing because puppeteer doesnt work well with a db.json server
    verify_test() {
        let email = document.getElementById('exampleInputEmail1');
        let password = document.getElementById('exampleInputPassword1');
        let emailFound = false;
        let passwordFound = false;
        for (let i = 0; i < DB.accounts.length; i++) {
            let element = DB.accounts[i];
            if (element.email === email.value) {
                emailFound = true;
            }
            if (element.password === password.value) {
                passwordFound = true;
            }
            if (emailFound && passwordFound) {
                if (element.id.charAt(0) === 'A') {
                    this.nextPage('A', element.id);
                    this.props.nextPage(2);//added for testing only
                } else {
                    this.nextPage('B', element.id);
                    this.props.nextPage(3);//added for testing only
                }
                break;
            }
        }
        email.classList.remove('is-valid');
        email.classList.remove('is-invalid');
        password.classList.remove('is-valid');
        password.classList.remove('is-invalid');
        if (!emailFound) {
            email.classList.add('is-invalid');
        } else {
            email.classList.add('is-valid');
        }
        if (!passwordFound) {
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1 id="heading">Roommify</h1>

                        <form className="needs-validation" id="form" noValidate>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Incorrect email
                                </div>
                            </div>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Incorrect password
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => this.verify()}>Submit</button>
                            <button type="button" className="btn btn-primary" onClick={() => this.props.nextPage(1)}>Create Account</button>
                            <button id="test_only" type="button" className="btn btn-primary" onClick={() => this.verify_test()}>Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>

            </div>
        )
    }
}

export default Login;