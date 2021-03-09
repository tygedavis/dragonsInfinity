import GeneralSkill from './GeneralSkill';
import './GeneralSkills.css';

const generalSkillValues = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Wisdom',
    'Intelligence',
    'Charisma'
]

export default function GeneralSkills() {
    return(
        <div className='general-skills-container'>
            {generalSkillValues.map((skill) => {
                return <GeneralSkill
                    text={skill}
                />
            })}
        </div>
    )
}