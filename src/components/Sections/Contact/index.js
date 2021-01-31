import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { icons } from './../../../utils/getFontAwesomeIcons'

import * as S from './styles'

import Section from '../../Section'

const SectionContact = ({ title, description, link: socialLinks }) => (
  <Section title={title} id='contact'>
    <p>{description}</p>

    <S.List>
      {socialLinks.map(item => {
        return (
          <li key={item.title}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={icons[item.title.toLowerCase()]} aria-label={item.title} title={item.title} size='2x' />
            </a>
          </li>
        )
      })}
    </S.List>
  </Section>
)

export default SectionContact