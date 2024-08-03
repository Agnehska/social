import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';


i18n.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lng:'ru',
  resources: {
    ru: {
      translation: {
        greeting: "Привет",
        menu: ['Профиль', 'Стена', 'Сообщения', 'Друзья', 'Музыка', 'Клипы', 'Фотографии', 'Игра'],
        profile: ['ФИО', 'Email адрес', 'Номер телефона', 'Веб страница', 'Адрес', 'Статус', 'Пол'] 
      }

    },
    en: {
      translation: {
        greeting: "Hello",
        menu: ['Profile', 'My wall', 'Messages', 'Friends', 'Music', 'Video', 'Photos', 'Game'],
        profile: ['Full name', 'Email address', 'Phone number', 'Website', 'Address', 'Status', 'Gender']
      }

    }
  }
})