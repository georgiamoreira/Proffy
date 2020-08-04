import React from 'react';


import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://images.unsplash.com/photo-1596396313909-b84362f2adec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" alt="Andressa Vale"/>
            <div>
              <strong>Andressa Vale</strong>
              <span>Dança</span>
            </div>
          </header>
          <p>
            Entusiasta das técnicas das piruetas avançadas.
            <br/><br/>
            Apaixonada por discoteca, vai te mostrar os melhores paranauês dos passinhos. 
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 60,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>

  )
  }

export default TeacherItem;
