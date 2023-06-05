import React, {useEffect, useState, useContext} from 'react'
import LinkBox from '../components/LinkBox'
import UserHeader from '../components/UserHeader'
import {toast} from 'react-toastify'
import UserContext from '../context/userContext'

const dashboard = () => {

  const [data, setData] = useState({});
  const {setUserData} = useContext(UserContext);

  useEffect(()=>{
    if(!localStorage.getItem('LinkTreeToken')) return window.location.href = "/login";
    fetch('https://linktree.adaptable.app/data/dashboard', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem('LinkTreeToken')
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.status==='error') return toast.error('Error happened');
      setData(data.userData);
      setUserData(data.userData);
      localStorage.setItem('userHandle', data.userData.handle);
      toast.success(data.message)
    }).catch(err=>{
      console.log(err);
    })
  }, [])

  return (
    <>
      <div className="pb-[350px] pt-[100px]">
        <UserHeader />
        <main>
          <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <LinkBox lbTitle="Links" lbNumber={data.links} lbSvg="url" lbTheme="red"/>
            <LinkBox lbTitle="Average Growth" lbNumber="6.8%" lbSvg="growth" lbTheme="blue"/>
            <LinkBox lbTitle="Engagement" lbNumber="12" lbSvg="email" lbTheme="red"/>
            <LinkBox lbTitle="Booming Links" lbNumber="30%" lbSvg="ig" lbTheme="blue"/>
          </section>
          <section>

          </section>
        </main>
      </div>
    </>
  )
}

export default dashboard