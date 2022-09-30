import React from 'react'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import './bannercustom.css'
import Logo from '../Logo'


export default props => {
    return (
        <Banner
            logo = {<Logo/>} 
            url={ window.location.pathname }
            items={[
                { "content": "Quoi de neuf au tieks ?", "url": "/wassup" },
                { "content": "Les poucaves du jour", "url": "/lpdc", "children": [
                    { "content": "Océane", "url": "/children/oceane" },
                    { "content": "Mehdi", "url": "/children/mehdi" },
                    { "content": "Un mec random", "url": "/children/zemmeled" }
                ]}
            ]} />
    )
} 
