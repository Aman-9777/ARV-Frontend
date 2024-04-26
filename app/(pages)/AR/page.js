"use client";
import requireAuth from "../../components/requireAuth";
import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { arCreate } from "../../utils/api";
import { setLoading } from "../../lib/features/loading";

const AR = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.user?.token);
  const authToken = token;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data, e) => {
    try {
      reset();
      const response = await arCreate(data, authToken);
      console.log(response, "responseresponse");
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
              <div className="card-header al_hd">Add AR</div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="mb-3 col-lg-12">
                      <label className="form-label" htmlFor="Company">
                        Company ID
                      </label>
                      <input
                        className="form-control"
                        type="Company ID"
                        placeholder="Company ID"
                        {...register("companyId", {
                          required: "Company ID Name is required",
                        })}
                      />
                      {errors.companyId && (
                        <p className="error">{errors.companyId.message}</p>
                      )}
                    </div>
                    <div className="mb-3 col-lg-12">
                      <label className="form-label" htmlFor="Company">
                        AR Name
                      </label>
                      <input
                        className="form-control"
                        type="AR Name"
                        placeholder="AR Name"
                        {...register("arName", {
                          required: "AR Name is required",
                        })}
                      />
                      {errors.arName && (
                        <p className="error">{errors.arName.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn-success btn btn-lg" type="submit">
                      ADD AR Name
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

export default requireAuth(AR);
