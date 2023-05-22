import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../store'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const dispatch = useDispatch()
    const [data, setdata] = useState({team1:"",score1:"",team2:"",score2:"",sports:"cricket"})
    const navigate=useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch(userActions.addscore(data));
        navigate(`/${data.sports}`)
    }
    const onchange = (e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form className='w-60 flex flex-col mx-auto items-center justify-center' onSubmit={onSubmit}>
            <label className="block ">
                <span className="block text-sm font-medium text-slate-700">Team1 Name</span>
                <input type="text"  name='team1' onChange={onchange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>

                <span className="block text-sm font-medium text-slate-700">Team1 score</span>
                <input type="text" name='score1' onChange={onchange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>

                <span className="block text-sm font-medium text-slate-700">Team2 Name</span>
                <input type="text" name='team2' onChange={onchange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>
                
                <span className="block text-sm font-medium text-slate-700">Team2 score</span>
                <input type="text" name='score2' onChange={onchange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "/>
                <label htmlFor="cars">Sport:</label>

                    <select name="sports" id="sports" onChange={onchange}>
                    <option value="cricket">Cricket</option>
                    <option value="football">Football</option>
                    <option value="volleyball">Volleyball</option>
                    <option value="Badminton">Badminton</option>
                    </select>
            </label>
            <button className="rounded-full bg-indigo-500 h-10 my-4 w-20 " type="Submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Form