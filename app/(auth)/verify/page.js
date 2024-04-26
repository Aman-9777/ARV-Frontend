"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSearchParams   } from 'next/navigation';
import { Suspense } from 'react'
import { useDispatch } from 'react-redux';
import { setLoading } from '../../lib/features/loading';
import { verifyEmail } from '../../utils/api'

const Verify = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = searchParams.get('token');
        dispatch(setLoading(true));
        const fetchData = async () => {
            try {
              const response = await verifyEmail(token);
            } catch (error) {
                console.error('Error Verify Email:', error);
            }finally {
                dispatch(setLoading(false));
            }
        };
 
        fetchData();
    }, []);

    return(
        <Suspense fallback={<div>Loading...</div>}>
            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                <h1>Email Verification Success</h1>
                <p>Your email has been successfully verified.</p>
                <Link href="/" className="btn btn-dark mt-3">
                    Back to Home
                </Link>
            </div>
        </Suspense>
    )
}
export default Verify;