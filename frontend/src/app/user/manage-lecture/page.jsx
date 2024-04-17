'use client';
import React, { useEffect, useState } from 'react'

const ManageLecture = () => {

    const [lectureList, setlectureList] = useState([]);

    const fetchlectureData = () => {
        fetch('http://localhost:5000/lecture/getall')
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setlectureList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchlectureData();
    }, [])


    const displayLecture = () => {
        return lectureList.map(lecture => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                    <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Edit
                    </a>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Student ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                                update
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayLecture()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageLecture