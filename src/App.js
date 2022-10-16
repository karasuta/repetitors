import { useState } from 'react';
import{ data } from './data';
import './App.css';

function App() {
  const [teacher, setTeacher] =useState(0);
  const {name,subject,experience,image,description}=data[teacher];
  const [showMore,setShowMore]=useState(false);
  const nextTeacher = ()=>{
    setTeacher((teacher=>{
      teacher++;
      if (teacher>data.length-1){
        teacher=0;
      }
      setShowMore(false);
      return teacher;
    }))
  }
  const previousTeacher = ()=>{
    setTeacher(teacher=>{
      teacher--;
      if (teacher<0){
        teacher=data.length-1;
      }
      setShowMore(false);
      return teacher;
    })
  }
  return (
    <div>
      <div className='title'>
        <h1>Наши репетиторы</h1>
      </div>
      <div className='btn_container'>
          <button className='btn' onClick={previousTeacher}>Назад</button>
          <button className='btn' onClick={nextTeacher}>Вперёд</button>
      </div>
      <div className='main_container'>
        <div className='container_photo'>
          <img src={image} width='200px' alt='person'/>
        </div>
        <div className='container_info'>
          <h2>{name}</h2>
          <h3>Предмет: <span className='red'>{subject}</span></h3>
          <h3>Опыт преподавания: {experience}</h3>
          <p>{showMore?description:description.substring(0,150)+'...'}
          <button className='show' onClick={()=>setShowMore(!showMore)}>{showMore?"скрыть":"подробнее"}</button>
          </p>
        </div>
    </div>
  </div>
  );
}

export default App;

