import React from 'react'
import { MdDelete } from 'react-icons/md';

function WorkExpForm({formData, setFormData}) {

  const handleChange = (index, event) => {

    const values = [...formData.workExpList];
    if(event.target.type === "checkbox"){
        values[index][event.target.name] = event.target.checked;
    }
    else{
        values[index][event.target.name] = event.target.value;
    }
    setFormData({
      ...formData,
      workExpList: values
    });
  }

  const addWorkExperience = () => {

    setFormData({
      ...formData,
      workExpList: [
        ...formData.workExpList,
        {
          compName: '',
          jobTitle: '',
          years: '',
          isCurrentlyWorking: false
        }
      ]
    });
  };

  return (

    <div>

      {formData.workExpList.map((work, index) => (

        <div key={index} className="w-full max-w-md mx-auto mt-5 p-5 rounded-lg shadow-md bg-gray-900">

          <label htmlFor="compName" className="text-white">Company Name</label>
          <input
            type="text"
            name="compName"
            id="compName"
            value={work.compName}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <label htmlFor="jobTitle" className="text-white mt-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={work.jobTitle}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />

          <label htmlFor="years" className="text-white mt-2">Years of Experience</label>
          <input
            type="number"
            name="years"
            id="years"
            value={work.years}
            onChange={(e)=>handleChange(index,e)}
            className="w-full p-2 rounded-md bg-gray-800 text-white"
          />
          <label htmlFor="isCurrentlyWorking" className="text-white mt-2 flex items-center gap-5">
            <span className="ml-2">Currently Working</span>
            <input
              type="checkbox"
              name="isCurrentlyWorking"
              id="isCurrentlyWorking"
              checked={work.isCurrentlyWorking}
              onChange={(e)=>handleChange(index,e)}
              className="h-5 w-5 text-blue-600 bg-gray-800 hover:cursor-pointer rounded focus:ring-blue-500"
            />
            </label>
          <button type="button" onClick={() => {
            const values = [...formData.workExpList];
            values.splice(index, 1);
            setFormData({
              ...formData,
              workExpList: values
            });
          }} className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 hover:cursor-pointer text-white">
               <MdDelete size={20}/>
          </button>

        </div>

      ))}

      <button
        type="button"
        onClick={addWorkExperience}
        className="mt-4 bg-blue-600 px-4 py-2 hover:bg-blue-700 hover:cursor-pointer rounded text-white"
      >
        Add Work Experience
      </button>

    </div>

  );

}

export default WorkExpForm