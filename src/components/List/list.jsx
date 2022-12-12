import React from 'react'

const List = ({stat}) => {
  return (
    <div>
        {stat.map(() =>{
        const {id,icon,name,info} = stat;
        return<article key={id}>
             <img src={icon}/>
        </article>
        })}
    </div>
  )
}

export default List;