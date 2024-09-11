import React from "react";
import CusTables from "../../components/CusTables";
import { useNavigate } from "react-router-dom";

function SyllabusList() {
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "subjectName", headerName: "Subject name", width: 130 },
    { field: "class", headerName: "Class", width: 130 },
  ];
  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-2xl text-center mt-2 mb-2 font-semibold">
        Syllabus List
      </h1>
      <div className="flex justify-end w-full mb-2">
        <button
          onClick={() => navigate("/add-subject")}
          className="border-green-500 border-2 px-5 font-semibold py-1 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-[3px]"
        >
          Add
        </button>
      </div>
      <CusTables data="syllabus" columns={columns} showDownload={true} />
    </>
  );
}

export default SyllabusList;
