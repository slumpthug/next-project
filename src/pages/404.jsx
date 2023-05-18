import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Errorcomp from '../../components/errorcomp/Errorcomp';

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [router])

    return (
        <div>
            <Errorcomp/>
        </div>
    );
};

export default Error;