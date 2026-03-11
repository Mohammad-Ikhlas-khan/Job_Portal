import React from "react";
import { MdDelete } from "react-icons/md";

function EduForm({ formData, setFormData }) {

  const handleChange = (index, event) => {

    const values = [...formData.educationList];
    values[index][event.target.name] = event.target.value;

    setFormData({
      ...formData,
      educationList: values
    });
  };

  const addEducation = () => {

    setFormData({
      ...formData,
      educationList: [
        ...formData.educationList,
        {
          university:'',
          degree:'',
          specialization:'',
          cgpa:'',
          yearOfPassing:''
        }
      ]
    });

  };

  return (

    <div>

      {formData.educationList.map((edu, index) => (

        <div key={index} className="w-full max-w-md mx-auto mt-5 p-5 rounded-lg shadow-md bg-gray-900">

          <label className="text-white">University</label>
          <input
            type="text"
            name="university"
            value={edu.university}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <label className="text-white mt-2">Degree</label>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <label className="text-white mt-2">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={edu.specialization}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <label className="text-white mt-2">CGPA</label>
          <input
            type="number"
            name="cgpa"
            value={edu.cgpa}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <label className="text-white mt-2">Year Of Passing</label>
          <input
            type="number"
            name="yearOfPassing"
            value={edu.yearOfPassing}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <button type="button" onClick={() => {
            const values = [...formData.educationList];
            values.splice(index, 1);
            setFormData({
              ...formData,
              educationList: values
            });
          }} className="mt-4 bg-red-600 px-4 hover:bg-red-700 hover:cursor-pointer py-2 rounded text-white">
            <MdDelete size={20}/>
          </button>

        </div>

      ))}

      <button
        type="button"
        onClick={addEducation}
        className="mt-4 bg-blue-600 px-4 py-2 hover:bg-blue-700 hover:cursor-pointer rounded text-white"
      >
        Add Education
      </button>

    </div>

  );

}

export default EduForm;