import React from 'react'

const CheckBox = ({ onCheckboxChange, selectGender }) => {
  return (
      <div className='flex '>
          <div className='form-control mr-4 '>
              <label className={`label gap-2 cursor-pointer `}>
                  <span className="label-text ">Male</span>
                  <input type="checkbox" className="checkbox  border-slate-900"
                    checked = {selectGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                  >
                    </input>
              </label>
          </div>
          <div className='form-control'>
              <label className={`label gap-2 cursor-pointer `}>
                  <span className="label-text ">Female</span>
                  <input type="checkbox" className="checkbox  border-slate-900" 
                    checked = {selectGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                  >
                  </input>
              </label>
          </div>
      </div>
  )
}

export default CheckBox