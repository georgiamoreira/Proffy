import React from 'react';
import PageHeader from '../../components/PageHeader';


function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aulas!"
      description="O primeiro passo é preencher o formulário de inscrição"      
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>            
          </div>
        </fieldset>
      
      </main>           
    </div>
  )
}

export default TeacherForm;