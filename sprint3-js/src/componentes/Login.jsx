import React, { useState } from 'react';
import styles from '../css/Login.module.css';

function Login() {
  // Definindo os estados para armazenar os dados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
  const Enviar = (e) => {
    e.preventDefault(); 

    // criando objetos para os dados
    const infoNome = { nome: nome };
    const infoEmail = { email: email };
    const infoSenha = { senha: senha };

    // armazenando os objetos no localStorage
    localStorage.setItem('Nome', JSON.stringify(infoNome));
    localStorage.setItem('Email', JSON.stringify(infoEmail));
    localStorage.setItem('Senha', JSON.stringify(infoSenha));

    // Limpando as entradas
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <>
      <fieldset>
        <h2>Login</h2>
        <form className={styles.login} onSubmit={Enviar}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="nome"
            value={nome}
            //armazena o valor no campo 
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" id="btnsubmit">
            Enviar
          </button>
        </form>
      </fieldset>
    </>
  );
}

export default Login;
