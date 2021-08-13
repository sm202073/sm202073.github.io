import React from 'react'
import styled from 'styled-components';
import resume from '../img/chicagoportrait.JPG';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Sana Madhavan</span></h4>
                <p className="paragraph">
                     I’m an empathetic, creative, analytical and self-motivated student pursuing a B.S. degree in Computer Science & Linguistics 
                     at the University of Illinois at Urbana-Champaign, graduating in May 2024. 
                     With strong communication skills and the desire and ability to collaborate and contribute while engaging in a process of continuous learning, 
                     I hope to pursue the areas of Software Engineering and Product Management, Natural Language Processing, and Social Impact through Civic Technology, the intersection of technology with the public sector. 
                    
                </p>
                
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
