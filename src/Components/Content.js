import React from 'react'
import data from '../Constant/data'
import './Content.css'

const Content = () => {
  return (
    <div id="container">
      {data.map(obj =>
        <div id="imgcontainer">
          <img src={obj.imageURL} id="img2" />
          <div id="info">
            <h3 id="title">{obj.about}</h3>
            <p  id="detail">{obj.description}</p>
          </div>
        </div>

      )}
    </div>
  )
}

export default Content;

// {data.map(obj =>
//     <ClickableIcon
//     source={require('../Assets/serviceIcons/babysitter.png')} 
//     onPress={()=>props.navigation.navigate('BookPage',{obj:data})}
//     title={obj.about} 
//     key={obj.key} 
//     />
// )
// }