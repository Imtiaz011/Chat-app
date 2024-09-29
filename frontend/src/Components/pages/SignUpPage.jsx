import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="email" placeholder="username" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Fullname</span>
                            </label>
                            <input type="email" placeholder="Fullname" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" className="input input-bordered" required />

                            {/* <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <input type="Gender" placeholder="Gender" className="" required />
                            <input type="checkbox" className="checkbox" name="male" />
                            <span className="label-text">Male</span>
                            <input type="checkbox" className="checkbox" name="female" />
                            <span className="label-text">Female</span>
                            <input type="checkbox" className="checkbox" name="other" />
                            <span className="label-text">Other</span> */}

                        </div>
                        <Link to={"/login"}><p> Already have an account ? </p> </Link>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage