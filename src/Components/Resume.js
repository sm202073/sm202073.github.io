import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Summer 2022'} 
                        title={'Digital Technology Development Intern'}
                        subTitle={'General Electric'}
                        text={'VMO team'} 
                    />
                    <ResumeItem 
                        year={'Summer 2021'} 
                        title={'Software Engineer Intern'}
                        subTitle={'Ameren'}
                        text={'Software engineering intern for Digital Technology Operations - Infrastructure Automation within Ameren. Created an Ansible API utilizing Flask to run Ansible playbooks from a VRA endpoint and encrypted credentials at rest. Delivered a SharePoint File Rotate automation script to production so a SharePoint user does not overwrite the same file within a given SharePoint directory; Script was configurable by taking in a cutoff year to rotate files at and the respective SharePoint location and creates archive folders based on year. Built and drove the development of Pester unit tests within Powershell to simulate file rotation locally. Participated in daily and weekly agile scrum ceremonies, including refinement, having an active voice in retro, and daily scrums, among others. Wrote user stories in Jira based on requirement meetings with various stakeholders within Ameren Digital. Closely collaborated with other Innovation interns and software engineers. Presented project progress at the Digital Collegiate Report-out to upper management and leadership within Ameren, including the Chief Digital Information Officer.'} 
                    />
                    <ResumeItem 
                        year={'January 2021 - Present'} 
                        title={'Course Staff'}
                        subTitle={'University of Illinois at Urbana-Champaign'}
                        text={'Course Assistant and incoming Associate for CS 125: Introduction to Computer Science at Illinois. Responsible for helping undergraduate students gain a solid foundation in core programming concepts several hours a week and making unique and original contributions to course content and assignments. '} 
                    />
                    <ResumeItem 
                        year={'Summer 2019'} 
                        title={'Software Engineering Intern'}
                        subTitle={'Liquidware Labs'}
                        text={'Developed an optimizer service that manages the performance of Windows-based workloads by de-prioritizing applications not in-focus by the user. Influenced the company’s inclusion of female employees in computing.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2024'} 
                        title={'Bachelor of Science in Computer Science & Linguistics'}
                        subTitle={'University of Illinois at Urbana-Champaign'}
                        text={"Dean's List"} 
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
