"use client";
import requireAuth from "../../components/requireAuth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../lib/features/loading";
import { getMeetings, updateMeeting } from "../../utils/api";
import moment from "moment";
// import { setMeetings } from '../../lib/features/meetingSlice';

const ViewMeeting = () => {
  const [meetings, setMeetingsList] = useState([]);
  const [editMeeting, setEditMeeting] = useState({});
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
        const response = await getMeetings(data, authToken);
        setMeetingsList(response.data);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [updateList]);

  const handleEdit = (meeting) => {
    console.log(meeting);
    setEditMeeting({
      ...meeting,
      meetingId: meeting.meetingId,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditMeeting((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const meetingData = {
        meetingStartDate: editMeeting.meetingStartDate,
        meetingEndDate: editMeeting.meetingEndDate,
        startTime: editMeeting.startTime,
        endTime: editMeeting.endTime,
      };
      //console.log('Updated Meeting', meetingData);
      const response = await updateMeeting(
        editMeeting.meetingId,
        meetingData,
        authToken
      );
      // Reload the meeting list after updating
      if (response) {
        setUpdateList(!updateList);
      }
    } catch (error) {
      console.error("Error updating meeting:", error);
    }
  };

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header al_hd">View Meeting</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Meeting ID</th>
                        <th scope="col">Meeting Start Date</th>
                        <th scope="col">Meeting End Date</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {meetings.map((meeting, index) => (
                        <tr key={index}>
                          <td>{meeting.meetingId}</td>
                          <td>
                            {moment(meeting.meetingStartDate)
                              .utc()
                              .format("DD/MM/YYYY")}
                          </td>
                          <td>
                            {moment(meeting.meetingEndDate)
                              .utc()
                              .format("DD/MM/YYYY")}
                          </td>
                          <td>{meeting.startTime}</td>
                          <td>{meeting.endTime}</td>
                          <td>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#updateMeeting"
                              className="btn"
                              onClick={() => handleEdit(meeting)}
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
        id="updateMeeting"
        aria-labelledby="updateMeetingLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateMeetingLabel">
                Update Meeting
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
                  <label htmlFor="meetingStartDate" className="form-label">
                    Meeting Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="meetingDate"
                    name="meetingStartDate"
                    value={editMeeting.meetingStartDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="meetingEndDate" className="form-label">
                    Meeting End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="meetingDate"
                    name="meetingEndDate"
                    value={editMeeting.meetingEndDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="startTime" className="form-label">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="startTime"
                    name="startTime"
                    value={editMeeting.startTime}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endTime" className="form-label">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    name="endTime"
                    value={editMeeting.endTime}
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

export default requireAuth(ViewMeeting);
