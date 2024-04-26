"use client";
import requireAuth from "../../components/requireAuth";
import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "../../utils/api";
import { setLoading } from "../../lib/features/loading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user?.token);
  const authToken = token;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // dispatch(setLoading(true));
      reset();
      const response = await addCompany(data, authToken);
      console.log(response);
    } catch (error) {
      console.log(error);
      // setError('Invalid email or password. Please try again.');
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
              <div className="card-header al_hd">Add Company</div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="mb-3 col-lg-12">
                      <label className="form-label" htmlFor="Company">
                        Company Name
                      </label>
                      <input
                        className="form-control"
                        type="Company Name"
                        placeholder="Company Name"
                        {...register("companyName", {
                          required: "Company Name is required",
                        })}
                      />
                      {errors.companyName && (
                        <p className="error">{errors.companyName.message}</p>
                      )}
                    </div>
                    <div className="mb-3 col-lg-12 form-group">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="Address">
                          Address
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Address"
                          {...register("address", {
                            required: "Address is required",
                          })}
                        />
                        {errors.address && (
                          <p className="error">{errors.address.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-12">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="Cin">
                          Cin
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Cin"
                          {...register("cinNumber", {
                            required: "Cin is required",
                          })}
                        />
                        {errors.cinNumber && (
                          <p className="error">{errors.cinNumber.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-12">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="Pan">
                          Pan
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Pan"
                          {...register("panNumber", {
                            required: "Pan is required",
                          })}
                        />
                        {errors.panNumber && (
                          <p className="error">{errors.panNumber.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-3 col-lg-12">
                      <div className="position-relative">
                        <label className="form-label" htmlFor="Pan">
                          RP Id
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="RP"
                          {...register("rpId", {
                            required: "RP is required",
                          })}
                        />
                        {errors.rpId && (
                          <p className="error">{errors.rpId.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn-success btn btn-lg" type="submit">
                      ADD
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
};

export default requireAuth(Dashboard);
