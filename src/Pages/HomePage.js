import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Sana Madhavan</span></h1>
                <p>
                    A dedicated student aspiring to be a software engineer, social impact technologist, Natural
                    Langauge Processing researcher, and future educator. Welcome to my corner of the Internet!
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/sana-madhavan/" className="icon i-iconhover">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/sm202073" className="icon i-iconhover">
                        <GithubIcon />
                    </a>
                    <a href="mailto:sana.madhavan20@gmail.com?subject=Hi Sana!" className="icon i-iconhover">
                        <EmailIcon />
                    </a>
                    <a href="https://www.facebook.com/sana.madhavan.395" className="icon i-iconhover">
                        <FacebookIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-iconhover{
                &:hover{
                    border: 2px solid #E5E5E5;
                    color: #E5E5E5;
                }
            }
        }
    }
`;

export default HomePage;
