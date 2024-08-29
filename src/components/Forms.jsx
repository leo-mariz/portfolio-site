import React, { useState } from 'react';
import styles from '../sections/static/Contact.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    service: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          description: formData.description
        })
      });

      if (response.status === 200) {
        alert('Emails enviados com sucesso!');
      } else {
        const error = await response.json();
        alert('Erro ao enviar email: ' + (error.message || 'Erro desconhecido'));
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar email.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="service">Assunto (Serviço):</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um serviço</option>
          <option value="web_development">Desenvolvimento Web</option>
          <option value="backend_development">Desenvolvimento Backend</option>
          <option value="app_development">Desenvolvimento Mobile</option>
          <option value="rpa">Automação de Processos (RPA)</option>
        </select>
      </div>

      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          name="description"
          class='description' className={styles.description}
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;