import React, { useEffect, useState } from 'react';
import './indianbank.css';

const Indianbank = () => {
  const [ifse, setIfse] = useState('');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectState, setSelectState] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [district, setDistrict] = useState([]);
  const [selectDistrict, setSelectDistrict] = useState('');
  const [subcity, setSubcity] = useState([]);
  const [selectSubcity, setSelectSubcity] = useState('');
  const [center, setCenter] = useState([]);
  const [selectCenter, setSelectCenter] = useState('');
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch('https://bank-apis.justinclicks.com/API/V1/STATE/')
      .then((response) => response.json())
      .then((data) => {
        console.log('States fetched:', data);
        setState(data);
      })
      .catch((error) => console.error('Error fetching states:', error));
  }, []);
  
  useEffect(() => {
    if (query) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${query}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('IFSC details fetched:', data);
          setIfse(data);
        })
        .catch((error) => console.error('Error fetching IFSC details:', error));
    }
  }, [query]);
  
  useEffect(() => {
    if (selectState) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectState}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Cities fetched:', data);
          setCity(data);
        })
        .catch((error) => console.error('Error fetching cities:', error));
    }
  }, [selectState]);
  
  useEffect(() => {
    if (selectState && selectCity) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectState}/${selectCity}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Districts fetched:', data);
          setDistrict(data);
        })
        .catch((error) => console.error('Error fetching districts:', error));
    }
  }, [selectState, selectCity]);
  
  useEffect(() => {
    if (selectState && selectCity && selectDistrict) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectState}/${selectCity}/${selectDistrict}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Subcities fetched:', data);
          setSubcity(data);
        })
        .catch((error) => console.error('Error fetching subcities:', error));
    }
  }, [selectState, selectCity, selectDistrict]);
  
  useEffect(() => {
    if (selectState && selectCity && selectDistrict && selectSubcity) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectState}/${selectCity}/${selectDistrict}/${selectSubcity}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Centers fetched:', data);
          setCenter(data);
        })
        .catch((error) => console.error('Error fetching centers:', error));
    }
  }, [selectState, selectCity, selectDistrict, selectSubcity]);
  
  useEffect(() => {
    if (selectState && selectCity && selectDistrict && selectSubcity && selectCenter) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectState}/${selectCity}/${selectDistrict}/${selectSubcity}/${selectCenter}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Details fetched:', data);
          setDetail(data);
        })
        .catch((error) => console.error('Error fetching details:', error));
    }
  }, [selectState, selectCity, selectDistrict, selectSubcity, selectCenter]);
  

  const formClick = (e) => {
    e.preventDefault();
    setQuery(search.trim());
  };

  return (
    <div className="mainbank">
      <form onSubmit={formClick}>
        <input
          type="text"
          className="banksearch"
          value={search}
          placeholder="Enter Your IFSC Code"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <h4 className="h4">OR</h4>
      <form>
        <input
          type="text"
          className="state"
          list="State"
          value={selectState}
          onChange={(e) => setSelectState(e.target.value)}
          placeholder="Enter Your State"
        />
        <datalist id="State">
          {state.map((i, index) => (
            <option key={index} value={i} />
          ))}
        </datalist>
      </form>

      <form>
        <input
          type="text"
          className="state"
          list="city"
          placeholder="Enter Your City"
          value={selectCity}
          onChange={(e) => setSelectCity(e.target.value)}
        />
        <datalist id="city">
          {city.map((k, index) => (
            <option key={index} value={k} />
          ))}
        </datalist>
      </form>

      <form>
        <input
          type="text"
          className="state"
          list="district"
          placeholder="Enter Your District"
          value={selectDistrict}
          onChange={(e) => setSelectDistrict(e.target.value)}
        />
        <datalist id="district">
          {district.map((j, index) => (
            <option key={index} value={j} />
          ))}
        </datalist>
      </form>

      <form>
        <input
          type="text"
          className="state"
          list="subcity"
          placeholder="Enter Your Subcity"
          value={selectSubcity}
          onChange={(e) => setSelectSubcity(e.target.value)}
        />
        <datalist id="subcity">
          {subcity.map((l, index) => (
            <option key={index} value={l} />
          ))}
        </datalist>
      </form>

      <form>
        <input
          type="text"
          className="state"
          list="center"
          placeholder="Enter Your Center"
          value={selectCenter}
          onChange={(e) => setSelectCenter(e.target.value)}
        />
        <datalist id="center">
          {center.map((c, index) => (
            <option key={index} value={c} />
          ))}
        </datalist>
      </form>

      <div className="div">
        {ifse ? (
          <div className="info">
            <ul>
              {Object.entries(ifse).map(([key, value]) => (
                <div className="fetch" key={key}>
                  <li>
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
        {detail ? (
          <div className="info">
            <ul>
              {Object.entries(detail).map(([key, value]) => (
                <div className="fetch" key={key}>
                  <li>
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
  );
};

export default Indianbank;
