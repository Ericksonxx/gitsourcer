import {useEffect, useState} from 'react';
import Link from 'next/link'
import Profile from './profile'


function App({userPass}) {

  const [results, setResults] = useState([])
  const [data, setData] = useState()
  const [formInput, updateFormInput] = useState({ location: '', bio: '', languages: ''})
  const userCard = ""
  const item = {login : ""}
  const [user, setUser] = useState("ai")
  


  async function search() {

    fetch(`https://api.github.com/search/users?q=location:${formInput.location} followers:>=50 ${formInput.bio} +in:description language:${formInput.language} type:user`, {
      headers : new Headers ({
        'Authorization': 'Token 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'
      })
    })
     .then(response => response.json())
     .then(data => setResults(data.items));
  }

  console.log(results)

    return(
      <div className="grid grid-cols-10">
        <div className="col-span-4 overflow-scroll h-screen">
        <div className="bg-slate-700 py-20 text-slate-100">
<div className="ml-6 grid">
  <div className="font-bold text-slate-100 text-2xl text-center">
  Search for developers in
  <input 
placeholder="(location)"
className="mt-4 p-2 w-2/6 mx-2 bg-transparent border-b-4 border-slate-100 placeholder:text-slate-100 placeholder:tfont-bold placeholder:text-2xl placeholder:text-center text-center"
onChange={e => updateFormInput({ ...formInput, location: e.target.value })}
/>
who are doing 
<input 
placeholder="(position)"
className="mt-4 p-2 w-2/6 mx-2 bg-transparent border-b-4 border-slate-100 placeholder:text-slate-100 placeholder:tfont-bold placeholder:text-2xl placeholder:text-center text-center"
onChange={e => updateFormInput({ ...formInput, bio: e.target.value })}
/>
with
<input 
placeholder="(language)"
className="mt-4 p-2 w-2/6 mx-2 bg-transparent border-b-4 border-slate-100 placeholder:text-slate-100 placeholder:tfont-bold placeholder:text-2xl placeholder:text-center text-center"
onChange={e => updateFormInput({ ...formInput, languages: e.target.value })}
/>
<br/><br/>
<button className="mt-6 bg-slate-100 text-slate-900 px-6 py-2 font-bold rounded-full text-center" onClick={e => search(e)}>Search for developers</button>

  </div>
</div>

<div className="bg-slate-700 w-full mt-20">
  {results.map((item, index) => {

async function test(e) {
const newUser = item.login
setUser(newUser)
console.log(newUser)
if(user == newUser){console.log("TOME")}
}
     
      const profilePic = item.avatar_url
      const userCard = item.login

        return(
          <button className="w-5/6" onClick={(e) => test(e)} key={item.login}>
          <div className="bg-slate-900 p-4 m-4 mx-4 rounded-xl w-full">
            <div className="grid grid-cols-3 m-auto">
              <img src={profilePic}  className="text-center rounded-full mb-0"/>
              <p className="font-bold m-auto text-xl">{userCard}</p>
              <a href={item.html_url} className="bg-slate-500 m-auto text-slate-100 font-bold w-fit h-fit px-6 py-2 rounded-full">Github</a>
            </div>      
          </div>
          </button>
        ) 
  })}
</div>
</div>
        </div>
      <div className="col-span-6 overflow-scroll h-screen"><Profile user={user}/></div>
      </div>
    )
  }

export default App;
