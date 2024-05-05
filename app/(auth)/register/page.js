"use client";
import React, { useState, useEffect } from "react";
import { signup } from "../../utils/api";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../../lib/features/userAuth/auth";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import "../login.css";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirm] = useState(false);
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await signup(data);
      console.log("Result", response);
      dispatch(setUser(response.user));
      reset();
      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmVisibility = () => {
    setShowConfirm(!showConfirmPassword);
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
                      alt=""
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                  <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      className="form-control _ge_de_ol"
                      type="text"
                      placeholder="Enter Name"
                      onFocus={(e) => (e.target.placeholder = "")}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters long",
                        },
                        pattern: {
                          value: /^[a-zA-Z\s]*$/,
                          message: "Name must only contain letters and spaces",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="error">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      id="email"
                      name="email"
                      className="form-control _ge_de_ol"
                      type="email"
                      placeholder="Enter Email"
                      aria-required="true"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      autoComplete="off"
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
                      placeholder="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
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
                    <input
                      id="password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      placeholder="Repeat password"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === getValues("password") ||
                          "Passwords do not match",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="error">{errors.confirmPassword.message}</p>
                    )}
                    <i
                      className={`fa fa-fw ${
                        showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                      } toggle-password field-icon`}
                      onClick={toggleConfirmVisibility}
                    ></i>
                  </div>
                  <div className="form-group">
                    <div className="btn_uy">
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={loading}
                      >
                        <span>{loading ? "Registering..." : "Register"}</span>
                      </button>
                    </div>
                  </div>
                  {errors.api && (
                    <div className="alert alert-danger" role="alert">
                      {errors.api.message}
                    </div>
                  )}
                  {/* {error && <div className="alert alert-danger" role="alert">{error}</div>} */}

                  <div className="form-group">
                    Have an account?
                    <Link href="/login" className="text-success">
                      {" "}
                      Log In
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
}
