import React from 'react';
import tags from './tags.js';
import './Skills.css'

function Skills() {

    const tagElement = tags.map(tag => {
        return  <a href="h"><span style={{color:tag.color,backgroundColor:tag.backgroundColor}} className="tag tag-tag.name tag-lg">{tag.name}</span></a>
    })
  return (
    <section id="skills">
    <div className='tags-container'>
    {tagElement}
    </div>
    </section>
  )
}

export default Skills
