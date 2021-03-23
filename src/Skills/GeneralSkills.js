import GeneralSkill from './GeneralSkill';
import './GeneralSkills.css';
import SecondarySkill from './SecondarySkill';
import _ from 'lodash';
import { connect } from 'react-redux';

function GeneralSkills(props) {
    return(
        <div className='general-skills-container'>
            <div className='main-skills-container'>
                {props.generalSkills.map((skill) => {
                    return <GeneralSkill
                        id={skill.id}
                        name={skill.name}
                        level={skill.level}
                        modifier={skill.modifier}
                    />
                })}
            </div>
            <div className='secondary-skills-container'>
                {props.secondarySkills.map((skill) => {
                    return <SecondarySkill
                        name={skill.name}
                        genSkill={skill.genSkill}
                        proficient={skill.proficient}
                    />
                })}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        generalSkills: _.get(state, 'stats.generalSkills'),
        secondarySkills: _.get(state, 'stats.secondarySkills')
    };
}

export default connect(mapStateToProps)(GeneralSkills);