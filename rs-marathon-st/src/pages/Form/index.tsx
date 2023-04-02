import React, { useState } from 'react';
import TourCardsList from '../../components/TourCardsList';
import FormInputs from '../../components/FormInputs/index';

import './style.scss';

function FormPage() {
  const [data, setData] = useState([]);
  return (
    <>
      <FormInputs setData={setData} data={data} />
      <TourCardsList data={data} />
    </>
  );
}

export default FormPage;
