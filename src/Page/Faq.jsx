import React from 'react';

import background from '../images/bg-pattern-desktop.svg';
import box from '../images/illustration-box-desktop.svg';
import womanOnline from '../images/illustration-woman-online-desktop.svg';

import '../scss/main.scss';

import { Questions } from '../components/Questions'; 

export function Faq() {
    return(
        <div className='beforeCard'>
            <div className='card'>
                <aside className='image'>
                    <img className='background' src={background} alt="Imagem da sombra da imagem box" />
                    <img className='box' src={box} alt="Imagem de uma caixa ilustrativa"/>
                    <img className='womanOnline' src={womanOnline} alt="Imagem que contém um computador com comentários de usuários que está sendo analisando por uma mulher" />
                </aside>
                <main className='faq'>
                    <h1>FAQ</h1>
                    <Questions 
                        question='How many team members can I invite?'
                        response='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
                    />

                    <Questions 
                        question='What is the maximum file upload size?'
                        response='No more than 2GB. All files in your account must fit your allotted storage space.'
                    />

                    <Questions 
                        question='How do I reset my password?'
                        response='Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
                    />

                    <Questions 
                        question='Can I cancel my subscription?'
                        response='Yes! Send us a message and we’ll process your request no questions asked.'
                    />

                    <Questions 
                        question='Do you provide additional support?'
                        response='Chat and email support is available 24/7. Phone lines are open during normal business hours.'
                    />

                    <div className='footer'>
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 

                        Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
                    </div>
                </main>
            </div> 
        </div>
    );
}