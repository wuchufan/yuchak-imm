import React from 'react';
import EvaluationForm from '../components/EvaluationForm/EvaluationForm';
import ScrollToTop from '../utilities/ScrollToTop';

const Evaluation = () => {
  const sectionStyle={
    backgroundColor:'rgb(184, 215, 252)',
    padding:'5rem'
  }

  return (
    <section style={sectionStyle}>
      <ScrollToTop/>
      <EvaluationForm/>
    </section>
  );
}


export default Evaluation;
