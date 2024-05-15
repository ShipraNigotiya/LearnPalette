'use client';
import useTeacherContext from '@/app/context/TeacherContext';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const Managevideo = () => {

    const screenRecording = useRef(null);
    const [videoList, setvideoList] = useState([]);
    const [Recorder, setRecorder] = useState(null);
    const [displayMedia, setDisplayMedia] = useState(null);
    const [currentTeacher, setCurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('teacher')));
    
    const fetchvideosData = () => {
        fetch('http://localhost:5000/video/getall', {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": currentTeacher.token,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setvideoList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchvideosData();
    }, [])

    const deleteFunc = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/video/delete/' + id, {
            method: "DELETE"
        })
        if (res.status === 200) {
            fetchvideosData();
        }
    }

    const generateTitle = () => {
        return 'SCREEN_RECORDING_' + new Date().toISOString().replace(/:/g, '_');
    }

    const saveToDatabase = (filename) => {
        const data = {
            title: generateTitle(),
            file: filename
        }
        fetch(`http://localhost:5000/video/add`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
                toast.success('File Uploaded!!');
            }
        });
    }

    const updateBlobMetadata = (blob, newType, newName) => {
        // Create a new Blob from the old Blob's data with the new type
        const newBlob = new Blob([blob], { type: newType });
        // Create a new File from the new Blob with the new name
        const newFile = new File([newBlob], newName, { type: newType });
        return newFile;
    };

    const generateRandomName = () => {
        const timestamp = Date.now();
        return `screen_recording_${timestamp}.webm`;
    };

    const uploadFile = (file) => {
        const fd = new FormData();
        fd.append("myfile", file);
        // fd.append("originalname", file.originalname); // Add originalname to the FormData
        fetch(`http://localhost:5000/util/uploadfile`, {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
                toast.success('File Uploaded!!');
                // setSelFile(file.name)
                // updatePodcast({ published: true, record: file.name });
            }
        });
    };



    const startScreenRecording = async () => {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            audio: true, video: true
        });
        const recorder = new MediaRecorder(stream);
        setRecorder(recorder);
        setDisplayMedia(stream.getVideoTracks()[0]);
        const screenRecordingChunks = [];
        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                screenRecordingChunks.push(e.data);
            }
        }
        recorder.onstop = () => {
            //onstop event of media recorder  
            const blob = new Blob(screenRecordingChunks,
                { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            screenRecording.current.src = url;
            if (displayMedia) {
                displayMedia.stop();
            }
        }
        //Start the recording. 
        recorder.start();
    }

    const saveRecording = () => {
        fetch(screenRecording.current.src)
            .then(response => response.blob())
            .then(blob => {
                const file = updateBlobMetadata(blob, 'video/webm', generateRandomName());
                uploadFile(file);
                saveToDatabase(file.name);
                // const url = URL.createObjectURL(blob);
                // const a = document.createElement('a');
                // document.body.appendChild(a);
                // a.style = 'display: none';
                // a.href = url;
                // a.download = 'test.webm';
                // a.click();
                // window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error(error));
    }

    const displayvideos = () => {
        return videoList.map(video => (
            <div className='col-span-3'>
                <video src={"http://localhost:5000/" + video.file} controls></video>
            </div>
        ))
    }

    return (
        <div>
            <div className="w-full mt-5 container  mx-auto">
                <div className="w-full flex items-center justify-between">
                    <a
                        className=" text-center ml-80 flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-4xl lg:text-6xl justify-center "
                        href="#"
                    >
                        {/* Learn */}
                        <span className="  bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500  text-center">
                            videos
                        </span>
                    </a>
                </div>
            </div>

            <div className='flex gap-5'>
                <button
                    onClick={startScreenRecording}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-5'
                >Record New Video</button>
                {
                    Recorder &&
                    <button
                        onClick={() => { saveRecording() }}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-5'
                    >Save Recording</button>
                }

            </div>

            {
                Recorder &&
                <video ref={screenRecording} height={300} width={600} controls />
            }

            <div className='grid grid-cols-12 gap-5'>
                {
                    displayvideos()
                }
            </div>

        </div>
    )
}

export default Managevideo
