import React, { useState, useEffect } from 'react';
import TourCardsList from '../../components/TourCardsList';
import FormInputs from '../../components/FormInputs/index';

import './style.scss';

function FormPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('data has been refreshed');
  }, [data]);
  return (
    <>
      <FormInputs setData={setData} data={data} />
      <TourCardsList data={data} />
    </>
  );
}

export default FormPage;
