"use client";
import requireAuth from "../../components/requireAuth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVoter, updateVoter } from "../../utils/api";
import { setLoading } from "../../lib/features/loading";

const Viewvoter = () => {
  const [voters, setVoters] = useState([]);
  const [editVoter, setEditVoter] = useState({});
  const [updateVoterList, setUpdateVoterList] = useState(false);
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
        const response = await getVoter(data, authToken);
        setVoters(response.data);
      } catch (error) {
        console.error("Error fetching Voters:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [updateVoterList]);

  const handleEdit = (voter) => {
    setEditVoter({
      ...voter,
      voterId: voter.voterId,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditVoter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const voterData = {
        voterName: editVoter.voterName,
        email: editVoter.emailId,
        // Add other voter data fields here as needed
      };
      console.log("Updated Voter", voterData);
      // const response = await updateVoter(editVoter.voterId, voterData, authToken);
      // if (response) {
      //     setUpdateVoterList(true);
      // }
    } catch (error) {
      console.error("Error updating voter:", error);
    }
  };

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header al_hd">View Voters</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Voter Name</th>
                        <th scope="col">Voter ID</th>
                        <th scope="col">Voter List</th>
                        <th scope="col">Voting Share</th>
                        <th scope="col">Claim ID</th>
                        {/* <th scope="col">Claim Admitted</th> */}
                        <th scope="col">Email</th>
                        <th scope="col">Category</th>
                        <th scope="col">Company ID</th>
                        {/* <th>Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {voters.map((voter, index) => (
                        <tr key={index}>
                          <td>{voter.voterName}</td>
                          <td>{voter.voterId}</td>
                          <td>{voter.voterList}</td>
                          <td>{voter.votingShare}</td>
                          <td>{voter.claimId}</td>
                          {/* <td>{voter.claimAdmitted}</td> */}
                          <td>{voter.emailId}</td>
                          <td>{voter.category}</td>
                          <td>{voter.companyId}</td>
                          {/* <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#updateVoter"
                              className="btn"
                              onClick={() => handleEdit(voter)}
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                          </td> */}
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
        id="updateVoter"
        aria-labelledby="updateVoterLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateVoterLabel">
                Update Voter
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
                  <label htmlFor="voterName" className="form-label">
                    Voter Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="voterName"
                    name="voterName"
                    value={editVoter.voterName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="emailId"
                    value={editVoter.emailId}
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
export default requireAuth(Viewvoter);
