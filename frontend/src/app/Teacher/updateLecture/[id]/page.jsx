'use client'
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import  { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateLecture = () => {
  const { id } = useParams();
  const [LectureData, setLectureData] = useState(null);
  const [selFile, setSelFile] = useState("");
const router = useRouter();


  const fetchLectureData = async () => {
    const res = await fetch("http://localhost:5000/lecture/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setLectureData(data);
  };

  useEffect(() => {
    fetchLectureData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const res = await fetch('http://localhost:5000/lecture/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
    toast("Updated successfully")
   router.push('/Teacher/manage-lecture')
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Update Service</h3>
            {LectureData !== null ? (
              <Formik initialValues={LectureData} onSubmit={submitForm}>

                {(LectureData) => (

                  <form onSubmit={LectureData.handleSubmit}>
                    <label> Name</label>

                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {LectureData.errors.teacher}
                    </span>
                    <input
                      id="teacher"
                      onChange={LectureData.handleChange}
                      value={LectureData.values.teacher}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>subject</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {LectureData.errors.subject}
                    </span>
                    <input
                      id="subject"
                      onChange={LectureData.handleChange}
                      value={LectureData.values.subject}
                      type="text"
                      className="form-control mb-4"
                    />
                      <label>Description</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {LectureData.errors.description}
                    </span>
                    <input
                      id="description"
                      onChange={LectureData.handleChange}
                      value={LectureData.values.description}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>createAT</label>
                    <input
                      id="createAT"
                      onChange={LectureData.handleChange}
                      value={LectureData.values.createAT}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Thumbnail</label>
                    <input
                      type="file"
                      id="pimage"
                      className="form-control mb-4"
                      placeholder="Thumbnail"
                      onChange={uploadFile} />

                    

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLecture;