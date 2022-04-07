import React, {useRef, useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'
import './thememenu.css'

import  theme from  '../../assets/JsonData/theme.json'
import  theme_color from '../../assets/JsonData/theme_color.json'


const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}


const Thememenu = () => {
    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)

    clickOutsideRef(menu_ref, menu_toggle_ref)

    const setActiveMenu = () => menu_ref.current.classList.add('active')

    const closeMenu = () => menu_ref.current.classList.remove('active')

    const [currMode, setcurrMode] = useState('light')

    const [currColor, setcurrColor] = useState('blue')

    const dispatch = useDispatch()

    const setMode = mode => {
        setcurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))
    }

    const setColor = color => {
        setcurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))
    }

    useEffect(() => {
        const themeClass = theme.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))

        const colorClass = theme_color.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)

        if (colorClass !== undefined) setcurrColor(colorClass.id)

    }, []);
    return (
        <div>
            <button className="dropdown__toggle">
                <i className='bx bx-palette'></i>
            </button>
            <div className="theme-menu">
                <h4>
                    Theme settings
                </h4>
                <button className="theme-menu__close">
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme-menu__select">
                    <span>Choose mode</span>
                    <ul className="mode-list">
                        {
                                theme.map((item,index)=>(
                                <li key={index} onClick={() => setMode(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                        <i className='bx bx-check'></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                ))
                        }
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>Choose Colors</span>
                    <ul className="mode-list">
                        {
                                theme_color.map((item,index)=>(
                                <li key={index} onClick={() => setColor(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <i className='bx bx-check'></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Thememenu;
