"use client"
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompanies } from '../../lib/features/companySlice';
import { createMeeting } from '../../utils/api'
import { setLoading } from '../../lib/features/loading';
import requireAuth from '../../components/requireAuth';


const Createmeeting = () => {
    const { register, handleSubmit, setError, formState: { errors }, reset } = useForm();
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.user?.token);
    const authToken = token
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
            reset();
            const response = await createMeeting(data, authToken);
            console.log(response)
          } catch (error) {
            console.log(error);
          } finally {
            dispatch(setLoading(false));
          }
    };

    const validateEndTime = (value) => {
        const startTime = document.getElementById('startTime').value;
        if (startTime && value && startTime >= value) {
            return "End time must be greater than start time";
        }
        return true;
    };
    const validateDate = (value) => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (value < currentDate) {
            return "Date cannot be in the past";
        }
        return true;
    };

    return (
        <div className="body flex-grow-1 px-3">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
                            <div className="card-header al_hd">Create meeting</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label" htmlFor="selectCompany">Select Company</label>
                                            {companies.length > 0 && (
                                            <select
                                                id="companyId"
                                                className={`form-select ${errors.companyId ? 'is-invalid' : ''}`}
                                                {...register('companyId', { required: 'Company Name is required' })}
                                            >
                                                <option value="" disabled>Select Company</option>
                                                {companies.map((company) => (
                                                    <option key={company.companyId} value={company.companyId}>
                                                        {company.companyName}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                            {errors.companyId && <span className="text-danger">Please select a company</span>}
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label" htmlFor="meetingDate">Date</label>
                                            <input className={`form-control ${errors.meetingDate ? 'is-invalid' : ''}`} name='meetingDate' id="meetingDate" type="date" {...register('meetingDate', { required: true, validate: validateDate })} />
                                            {errors.meetingDate && <span className="text-danger">{errors.meetingDate.message}</span>}
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label" htmlFor="meetingId">Meeting Id</label>
                                            <input className="form-control" id="meetingId" type="text" {...register('meetingId', { required: true })} />
                                            {errors.meetingId && <span className="text-danger">Please enter a meeting id</span>}
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label" htmlFor="startTime">Start Time</label>
                                            <input className="form-control" name='meetingTime' id="startTime" type="time" {...register('startTime', { required: true })} />
                                            {errors.startTime && <span className="text-danger">Please enter a start time</span>}
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label className="form-label" htmlFor="endTime">End Time</label>
                                            <input className={`form-control ${errors.endTime ? 'is-invalid' : ''}`} id="endTime" type="time" {...register('endTime', { required: true, validate: validateEndTime })} />
                                            {errors.endTime && <span className="text-danger">{errors.endTime.message}</span>}
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <button className="btn-success btn btn-lg" type="submit">ADD MEETING</button>
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

export default requireAuth(Createmeeting)
