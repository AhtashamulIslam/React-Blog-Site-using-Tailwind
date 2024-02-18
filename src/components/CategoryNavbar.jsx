import React from 'react'

const CategoryNavbar = ({onSelectCategory,activeCategory}) => {
    const categories=['Startups','Security','AI','Apps','Tech']
  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center py-5 border-b-2 font-semibold text-gray-900 text-sm lg:text-xl'>
        <button onClick={()=>onSelectCategory(null)} 
        className={`lg:mr-0 mr-2 lg:ml-10 ${activeCategory ? ' ':'active-btn'}`}>All</button>
        {
            categories.map((category)=>(
                <button 
                key={category}
                onClick={()=>onSelectCategory(category)}
                className={`mr-2 space-x-16 ${activeCategory===category ? 'active-btn': ''}`}
                >
                    {category}
                    </button>
            ))
        }
    </div>
  )
}

export default CategoryNavbar
