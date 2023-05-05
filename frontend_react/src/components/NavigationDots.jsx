import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'experience', 'contact'].map((item, index)=> (
                
                <a 
                    key={item + index}
                    href={`#${item}`} 
                    className='app__navigation-dot'
                    style={active=== item ? { backgroundColor: '#4957e6'} : {}}
                    />
              ))}
    </div>
  )
}

export default NavigationDots;