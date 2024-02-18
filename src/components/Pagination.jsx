import React from 'react'

const Pagination = ({blogs,currentPage,blogNumber,onPageChange}) => {
    const totalPages=Math.ceil(blogs.length/blogNumber)
    
  const renderPaginationLinks=()=>{
    return Array.from({length:totalPages},(_,i)=>i+1).map((pageNumber)=>(
       <li className={currentPage===pageNumber ? 'activePagination' : ''} key={pageNumber}>
        <a href='#' onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
       </li>
    )
        
    )
  }
  
  return (
    
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
      </li>
      <div className='flex'>{renderPaginationLinks()}</div>
      <li>
      <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
      </li>
    </ul>
      
  )
}

export default Pagination
