import React from 'react';
import Vacancy from "./item/Vacancy";
import s from "./VacancyPage.module.css";
import Resume from "../resumes/item/Resume";
import {NavLink} from "react-router-dom";
import Company from "./item/Company";
import Area from "../resumes/item/Area";


let VacancyPage = (props) => {
    if (props.mustFetch) {
        props.fetchVacancies();
        props.fetchResumes();
        props.setMustFetch(false);
        props.fetchCompanies();
        props.fetchAreas();
    }

    const onResumeChange = (event) =>
    {
        props.selectResume(event);
    };

    let areas = props.areas
        .map((area) =>
                    <Area key = {area.area_id}
                             id={area.area_id}
                             area = {area.area}/>

        );
    console.log(areas);



    let vacancies = props.vacancies
        .map(vacancy =>
            <Vacancy key={vacancy.id}
                     id={vacancy.id}
                     companyId={vacancy.company_id}
                     vacancy={vacancy.vacancy}
                     name={vacancy.name}
                     area={vacancy.area_id}
                     status={vacancy.status}
                     sendResume = {props.sendResume}
            />);


    let resumes = props.resumes
        .map((resume) => <Resume key={resume.id}
                                 id={resume.id}
                                 name={resume.name}
                                 resume = {resume.resume}/>
        );
    let companies = props.companies
        .map((company) => <Company key={company.id}
                                        name={company.name}
            />
        );



    return  <div className={s.main_container}>


        {vacancies.map((v) =>
            <div className={s.f}>
                <div className={s.card}>

                    <div className={s.name}> Vacancy: </div> {v.props.name}
                    <br/>
                    <div className={s.name}> Details: </div>{v.props.vacancy}
                    <br/>
                    <div className={s.name}>Status: </div>{v.props.status}
                    <br/>
                    <div className={s.name}> Area: </div>{areas.filter(area => area.props.id === v.props.area)}
                    <br/>
                    <div className={s.name}>Company: </div>{companies.filter(company => company.props.id === v.companyId)}




                    <br/>

                </div>
                <div className={s.back_card}>


                    <div className={s.vacancy}> Choose your resume:</div>


                    <div>

                        <select className={s.select} onChange={onResumeChange}
                                value={props.id}>

                            <option/>
                            {resumes.map((resume) => {
                                console.log(resume);
                                return <option key={resume.props.id} value={resume.props.id}> {resume.props.resume}
                                    {console.log(resume.props.id)}
                                </option>
                            })
                            }
                        </select>
                    </div>
                    <br/>
                    <NavLink to ="/goodJobBro" activeClassName={s.active}> <button className={s.button}> SendResume </button> </NavLink>

                </div>
            </div>
        )}



    </div>;
};
export default VacancyPage;