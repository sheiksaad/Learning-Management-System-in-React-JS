import { Box } from "@mui/material";
import React, { useState } from "react";
import CusInput from "../../components/CusInput";
import CusRadio from "../../components/CusRadio";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/Firebase-config";
import { useNavigate } from "react-router-dom";

function SubjectForm() {
  const [formData, setFormData] = useState({
    subjectName: "",
    class: "",
    group: "",
  });
  let navigate = useNavigate();
  const [buttonDisable, setButtonDisable] = useState(false);
  const formHandler = async (e) => {
    e.preventDefault();
    setButtonDisable(true);

    try {
      const docRef = await addDoc(collection(db, "subjects"), formData);
      console.log("added");
      setButtonDisable(true);
      navigate("/subjects-list");
      setFormData({
        subjectName: "",
        class: "",
        group: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="max-w-[600px] m-auto py-10">
      <h1 className="text-center pb-2 text-2xl font-semibold">Add Subject</h1>
      <form className="flex flex-col gap-4" onSubmit={formHandler}>
        <CusInput
          value={formData.subjectName}
          place="Computer"
          type="text"
          label="Subject Name"
          setFormData={(e) =>
            setFormData({ ...formData, subjectName: e.target.value })
          }
        />
        <CusInput
          value={formData.class}
          place="1-12"
          type="number"
          label="Class"
          setFormData={(e) =>
            setFormData({ ...formData, class: Number(e.target.value) })
          }
        />

        <div>
          <h4>Gender</h4>
          <CusRadio
            value={formData.group}
            label="Pre-Medical"
            name="group"
            setFormData={(e) =>
              setFormData({ ...formData, group: e.target.value })
            }
          />
          <CusRadio
            value={formData.group}
            label="Pre-Engineering"
            name="group"
            setFormData={(e) =>
              setFormData({ ...formData, group: e.target.value })
            }
          />
        </div>

        <button
          disabled={buttonDisable}
          className={`bg-green-600 text-white py-1 rounded-sm ${
            buttonDisable ? "bg-green-200 cursor-not-allowed" : ""
          }`}
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default SubjectForm;
