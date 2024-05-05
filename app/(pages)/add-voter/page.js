"use client";
import requireAuth from "../../components/requireAuth";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCompanies } from "../../lib/features/companySlice";
import { addVoter } from "../../utils/api";
import { setLoading } from "../../lib/features/loading";

export default function Addvoter() {
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user?.token);
  const authToken = token;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const companies = useSelector(selectCompanies) || [];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onSubmit = async (data) => {
    console.log(data);
    try {
      dispatch(setLoading(true));
      const response = await addVoter(data, authToken);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header al_hd">Add Voter List</div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label">Select Company</label>
                        {companies.length > 0 && (
                          <select
                            id="companyId"
                            className={`form-select ${
                              errors.companyId ? "is-invalid" : ""
                            }`}
                            {...register("companyId", {
                              required: "Company Name is required",
                            })}
                          >
                            <option value="">Select Company</option>
                            {companies.map((company) => (
                              <option
                                key={company.companyId}
                                value={company.companyId}
                              >
                                {company.companyName}
                              </option>
                            ))}
                          </select>
                        )}
                        {errors.companyId && (
                          <p className="error">{errors.companyId.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label">Voter Name</label>
                        <input
                          className={`form-control ${
                            errors.voterName ? "is-invalid" : ""
                          }`}
                          id="voterName"
                          type="text"
                          placeholder="Voter Name"
                          {...register("voterName", {
                            required: "Voter Name is required",
                            pattern: {
                              value: /^[A-Za-z]+( [A-Za-z]+)?$/, // Regex pattern for alphabet with one space only
                              message: "Voter Name must contain alphabets",
                            },
                          })}
                        />
                        {errors.voterName && (
                          <p className="error">{errors.voterName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="voterList">
                          Voter List
                        </label>
                        <input
                          className={`form-control ${
                            errors.voterList ? "is-invalid" : ""
                          }`}
                          id="voterList"
                          type="text"
                          placeholder="Voter List"
                          {...register("voterList", {
                            required: "Voter List is required",
                            pattern: {
                              value: /^[A-Za-z]+$/, // Regex pattern for alphabet with one space only
                              message: "Voter List must contain alphabets",
                            },
                          })}
                        />
                        {errors.voterList && (
                          <p className="error">{errors.voterList.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="claimId">
                          Claim ID
                        </label>
                        <input
                          className={`form-control ${
                            errors.claimId ? "is-invalid" : ""
                          }`}
                          id="claimId"
                          type="text"
                          placeholder="Claim ID"
                          {...register("claimId", {
                            required: "Claim ID is required",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/, // Regex pattern for number followed by alphabet
                              message:
                                "Claim ID should contain only Alphabets or Numbers",
                            },
                          })}
                        />
                        {errors.claimId && (
                          <p className="error">{errors.claimId.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          className={`form-control ${
                            errors.emailId ? "is-invalid" : ""
                          }`}
                          id="email"
                          type="email"
                          placeholder="Email"
                          {...register("emailId", {
                            required: "Email is required",
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        {errors.emailId && (
                          <p className="error">{errors.emailId.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="claimAdmitted">
                          Amount of Claim Admitted
                        </label>
                        <input
                          className={`form-control ${
                            errors.claimAdmitted ? "is-invalid" : ""
                          }`}
                          id="claimAdmitted"
                          type="text"
                          placeholder="Amount of Claim Admitted"
                          {...register("claimAdmitted", {
                            required: "Amount of Claim Admitted is required",
                            pattern: {
                              value: /^\d+$/,
                              message:
                                "Amount of Claim Admitted must contain number",
                            },
                          })}
                        />
                        {errors.claimAdmitted && (
                          <p className="error">
                            {errors.claimAdmitted.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label">Voter Category</label>
                        {companies.length > 0 && (
                          <select
                            id="category"
                            className={`form-select ${
                              errors.companyId ? "is-invalid" : ""
                            }`}
                            {...register("category", {
                              required: "Voter Category is required",
                            })}
                          >
                            <option value="">Voter Category</option>
                            <option value="CREDITOR">Creditor </option>
                            <option value="CREDITOR_CLASS">
                              Creditor in Class
                            </option>
                          </select>
                        )}
                        {errors.companyId && (
                          <p className="error">{errors.companyId.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-6">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="votingShare">
                          Voting Share (%)
                        </label>
                        <input
                          className={`form-control ${
                            errors.votingShare ? "is-invalid" : ""
                          }`}
                          id="votingShare"
                          type="text"
                          placeholder="Voting Share (%)"
                          {...register("votingShare", {
                            required: "Voting Share is required",
                            pattern: {
                              value: /^\d+$/,
                              message: "Voting Share must contain number",
                            },
                          })}
                        />
                        {errors.votingShare && (
                          <p className="error">{errors.votingShare.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn-success btn btn-lg" type="submit">
                      ADD VOTER
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
