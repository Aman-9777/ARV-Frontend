"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { healthCheck, login } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../../lib/features/userAuth/auth";
import { setLoading } from "../../lib/features/loading";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import Image from "next/image";
import "../login.css";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState(""); //voter@gmail.com
  const [password, setPassword] = useState(""); //Hsaf3$%223
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.loading.isLoading);
  //const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (event) => {
    const formData = {
      email: event?.email,
      password: event?.password,
    };
    console.log({ formData });
    try {
      dispatch(setLoading(true));
      const userData = await login(formData);
      if (!userData.error) {
        dispatch(setUser(userData));
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="form-01-main">
      <div className="form-cover">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-sub-main">
                <div className="scral_bg">
                  <a href="#">
                    <Image
                      src="/images/vector.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <div className="form-group">
                    <input
                      id="email"
                      name="email"
                      className="form-control _ge_de_ol"
                      type="email"
                      value="voter@gmail.com"
                      placeholder="Enter Email"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onChange={(e) => setEmail(e.target.value)}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value="Hsaf3$%223"
                      onChange={(e) => setPassword(e.target.value)}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p className="error">{errors.password.message}</p>
                    )}
                    <i
                      className={`fa fa-fw ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } toggle-password field-icon`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>

                  <div className="form-group">
                    <div className="check_box_main">
                      <a href="#" className="pas-text">
                        Forgot Password
                      </a>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="btn_uy">
                      <button type="submit" className="btn btn-success">
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-success">
                      Sign Up Here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
