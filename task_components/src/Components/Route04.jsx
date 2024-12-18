import React, { useEffect, useState } from 'react'
import './indianbank.css'

const Indianbank = () => {
  const [ifse, setIfse] = useState('')
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [state,setState]=useState([])
  const [city,setCity]=useState([])
  const [selectstate,setSelectstate]=useState()
  const [selectcity,setSelectcity]=useState()
  const [district,setDistrict]=useState([])
  const [selectdistrict,setSelectdistrict]=useState()
  const  [subcity,setSubcity]=useState([])
  const [selectsubcity,setSelectsubcity]=useState()
  const [center,setCenter]=useState([])
  const [selectcenter,setSelectcenter]=useState()
  const [bank,setBank]=useState([])
  const [selectbank,setSelectbank]=useState()
  const [deatial,setdeatial]=useState()
  
useEffect(() => {
  fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/`)
  .then((response)=>response.json())
  .then((Data)=> {
    setState(Data)
  })
  .catch((error) => console.error('Error fetching data:', error));

},[])

  useEffect(() => {
    if (query) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`)
      .then((response) => response.json())
      .then((Data) => {
        setIfse(Data)
        console.log(Data);


      })
      .catch((error) => console.error('Error fetching data:', error));
    }
  }, [query])


  useEffect(()=>{

    if(selectstate){
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}`)
      .then((response) => response.json())
      .then((Data) => {
        setCity(Data)
       

      },[selectstate])
      .catch((error) => console.error('Error fetching data:', error));
    }
  })

  useEffect(()=>{

    if(selectstate && selectcity){
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectcity}`)
      .then((response) => response.json())
      .then((Data) => {
        setDistrict(Data)
       

 
      },[selectstate,selectcity])
      .catch((error) => console.error('Error fetching data:', error));
    }
  })

  useEffect(()=>{

    if(selectstate && selectcity && selectdistrict){
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectcity}/${selectdistrict}`)
      .then((response) => response.json())
      .then((Data) => {
        setSubcity(Data)
       

 
      },[selectstate,selectcity,selectdistrict])
      .catch((error) => console.error('Error fetching data:', error));
    }
  })
  useEffect(()=>{

    if(selectstate && selectcity && selectdistrict && selectsubcity){
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectcity}/${selectdistrict}/${selectsubcity}`)
      .then((response) => response.json())
      .then((Data) => {
        setCenter(Data)
        
       

 
      },[selectstate,selectcity,selectdistrict,selectsubcity])
      .catch((error) => console.error('Error fetching data:', error));
    }
  })

 

  useEffect(()=>{

    if(selectstate && selectcity && selectdistrict && selectsubcity && selectcenter){
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectstate}/${selectcity}/${selectdistrict}/${selectsubcity}/${selectcenter}`)
      .then((response) => response.json())
      .then((Data) => {
        setdeatial(Data)
       

 
      },[selectstate,selectcity,selectdistrict,selectsubcity,selectcenter])
      .catch((error) => console.error('Error fetching data:', error));
    }
  })


  const formclick = (e) => {
    e.preventDefault();
    setQuery(search)
  }
  return (
    <div className='mainbank'>
      <form onSubmit={formclick}>
        <input type="text" className='banksearch' value={search} placeholder='Enter Your IFSE Code' onChange={(e) => setSearch(e.target.value)} />
      </form>
      <h4 className='h4'>OR</h4>
      <form action="">
  <input type="text" className='state' list='State' value={selectstate}  onChange={(e)=>setSelectstate(e.target.value)} placeholder='Enter Your State' />
  <datalist id='State'>
    {state.map((i, index) => (
      <option key={index} value={i} />
    ))}
  </datalist>
</form>

<form action="">
  <input type="text" className='state' list='city'  placeholder='Enter Your City' value={selectcity} onChange={(e)=>setSelectcity(e.target.value)}/>
  <datalist id='city'>
    {city.map((k, index) => (
      <option key={index} value={k} />
    ))}
  </datalist>
</form>

<form action="">
  <input type="text" className='state' list='district'  placeholder='Enter Your district' value={selectdistrict} onChange={(e)=>setSelectdistrict(e.target.value)}/>
  <datalist id='district'>
    {district.map((j, index) => (
      <option key={index} value={j} />
    ))}
  </datalist>
</form>

<form action="">
  <input type="text" className='state' list='subcity'  placeholder='Enter Your Subcity' value={selectsubcity} onChange={(e)=>setSelectsubcity(e.target.value)}/>
  <datalist id='suncity'>
    {subcity.map((l, index) => (
      <option key={index} value={l} />
      
    ))}
  </datalist>
</form>

<form action="">
  <input type="text" className='state' list='center'  placeholder='Enter Your center' value={selectcenter} onChange={(e)=>setSelectcenter(e.target.value)}/>
  <datalist id='suncity'>
    
      <option  value={center} />
    
  </datalist>
</form>
<div className="div">
        {ifse ? (
          <div className="info">
            <ul>
              {Object.entries(ifse).map(([key, value]) => (
                <div className="fetch">
                <li key={key}>
                  <strong>{key}:</strong> {value !== null ? value : 'N/A'}
                </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          query && <div className="loading">Loading........</div>
        )}
      </div>
      
      <div className="div">
        {deatial ? (
          <div className="info">
            <ul>
              {Object.entries(deatial).map(([key, value]) => (
                <div className="fetch">
                <li key={key}>
                  <strong>{key}:</strong> {value !== null ? value : 'N/A'}
                </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div className="loading">Loading........</div>
        )}
      </div>
    </div>

    
  )
}

export default Indianbank;