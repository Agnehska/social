import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  {code: 'ru', lang: 'Russian'},
  {code: 'en', lang: 'English'}
]

const Languageselector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='btn-container'>
      {
        languages.map(lng => {
          return <button 
            key={lng.code} 
            onClick={() => changeLanguage(lng.code)}
            className={`ml-5 p-2 rounded-lg focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 ${lng.code === i18n.language ? 'selected' : ''}`}
          >
            {lng.lang}
          </button>
        })
      }
    </div>
  )
}

export default Languageselector