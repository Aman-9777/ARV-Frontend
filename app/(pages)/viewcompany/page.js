"use client";
import requireAuth from "../../components/requireAuth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../lib/features/loading";
import { getCompany, updateCompany } from "../../utils/api";
import { setCompanies } from "../../lib/features/companySlice";

const Viewcompany = () => {
  const [companies, setCompaniesList] = useState([]);
  const [editCompany, setEditCompany] = useState({});
  const [updateList, setUpdateList] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.user?.token);
  const authToken = token;
  useEffect(() => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      try {
        const data = {
          page: 1,
          limit: 10,
        };
        const response = await getCompany(data, authToken);
        setCompaniesList(response.data);
        dispatch(setCompanies(response.data));
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [updateList]);

  const handleEdit = (company) => {
    console.log(company);
    setEditCompany({
      ...company,
      companyId: company.companyId,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditCompany((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const companyData = {
        companyName: editCompany.companyName,
        address: editCompany.address,
      };
      console.log("Updated Company", companyData);
      const response = await updateCompany(
        editCompany.companyId,
        companyData,
        authToken
      );
      // Reload the company list after updating
      if (response) {
        setUpdateList(!updateList);
      }
    } catch (error) {
      console.error("Error updating company:", error);
    }
  };

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header al_hd">View Company</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">RP</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Pan</th>
                        <th scope="col">Address</th>
                        <th scope="col">CIN Number</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companies.map((company, index) => (
                        <tr key={index}>
                          <td>{company.rpId}</td>
                          <td>{company.companyName}</td>
                          <td>{company.panNumber}</td>
                          <td>{company.address}</td>
                          <td>{company.cinNumber}</td>
                          <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#updateCompany"
                              className="btn"
                              onClick={() => handleEdit(company)}
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      <div
        className="modal fade"
        id="updateCompany"
        aria-labelledby="updateCompanyLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateCompanyLabel">
                Update Company
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    value={editCompany.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={editCompany.address}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal End*/}
    </div>
  );
};

export default requireAuth(Viewcompany);
