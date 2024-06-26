import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { callApi } from '../services/api';
import { useAuth } from '../services/auth';
import { useNavigate } from 'react-router-dom';



function RegisterContainer(){

    const { login } = useAuth();
    const navigate = useNavigate();


    async function handleRegistration(data){
        const response = await callApi('http://localhost:3030/register/','POST',data);
        const token = response.token

        console.log('User data:', response.json);

        if(token){
            login(token)
            navigate('/home'); // Redirection vers la page d'accueil après la connexion
        }


    };

    return (
        <div>
        <RegisterForm onRegister={handleRegistration} />
        </div>
    );

};

export default RegisterContainer;