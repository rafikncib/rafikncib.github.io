import Education from "./Education";
import { useSelector,useDispatch } from 'react-redux';
import { educationsExperiencesActions } from '../store/educations_experiences'
import Skills from "./Skills";
const EducExper=()=>{
    //declaration
    const info=useSelector((state)=>state.experiences.info);
    const dispatch=useDispatch()
    
    const handleCHange=(value)=>{
        dispatch(educationsExperiencesActions.changeInfo(value));
    }
    
    
    return(
        <div id="educExperContent" className="pt-5">
            <div className="container pt-5 pb-4">
                <header className="text-center">
                    <h1 className="black section_title">EDUCATION & <span className="yellow">EXPERIENCES</span></h1>
                    <p className="sansSerifFont">IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.</p>
                    <div className="hstack gap-3 justify-content-center">
                        <button type="button" className={`btn ${info!=='educations'?'bg-black':' btn-danger'}`}  onClick={()=>handleCHange('educations')}>Education</button>
                        <button type="button" className={`btn ${info!=='skills'?'bg-black':' btn-danger'}`}  onClick={()=>handleCHange('skills')}>Skills</button>
                        <button type="button" className={`btn ${info!=='experiences'?'bg-black':' btn-danger'}`}  onClick={()=>handleCHange('experiences')}>Experience</button>
                    </div>
                </header>
                    {info==='educations'&&<Education />}
                    {info==='skills'&& <Skills />}
                    {info==='experiences'&& <Skills />}
            </div>
        </div>
    )
}

export default EducExper;