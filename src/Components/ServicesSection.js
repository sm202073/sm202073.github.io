import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Awards'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        title={'General Electric Star Award'} 
                        paragraph={'Selected as a recipient of the General Electric scholarship award applied towards a four-year university.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            title={'Published Author'} 
                            paragraph={'Published a fictional book in 2012 and published journalist in the Daily Illini, official University of Illinois newspaper'}
                        />
                    </div>
                    <ServiceCard 
                        title={'NCWIT Aspirations in Computing Award Winner'} 
                        paragraph={'Awarded based on outstanding aptitude and interest in computing and technology by the National Center for Women & Information Technology'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
