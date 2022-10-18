import React, { useEffect, useState } from 'react'

function User(){
    const[users,setUsers]=useState([])

    
    
const getUsers=async() => {
    const response= await fetch("https://api.github.com/users")
    setUsers(await response.json())
   console.log(users)
}


useEffect(()=>{
    getUsers();
},[]);
 



  return (
    <>
    
    <h2 className='h2'>List of Users in Github</h2>
    
    <div className='container-fluid my-4'>
        <div className='row text-center'>
{
    users.map((arr)=>{
        return(
            <div className='col-12 col-md-4'>
              <div className='card m-4 col-8' style={{width:"5 rem",height:"4 rem"}}>
                <img src={arr.avatar_url} className="card-img-top" alt="/" width="100px"height="300px"/>

                    
                      <h4 className='card-title mt-2' key={arr.id}>{`Name:      ${arr.login}`}
                      </h4>
                      <hr/>
                 
                
                <button type="button" onClick={() =>{window.open(arr.html_url,"_blank")}}  className="btn btn-info my-1 ">  Login to Github account </button>
                
              </div>
            </div>

          )
    })
}
        </div>
    </div>
    </>
  )
}

export default User