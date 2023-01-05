import React from 'react'
import './styles/pagination.css'

const Pagination = ({ Page, maxPage, setPage }) => {

    const pagesPerBlock = 6
    const currentBlock = Math.ceil(Page / pagesPerBlock)
    const maxBlock = Math.ceil(maxPage / pagesPerBlock)
    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock
    for (let i = initialPage; i <= finalPage; i++) {
        arrPages.push(i)
    }
    const handlePage = number => {
        setPage(number)
    }

    const handlePrevious = () => {
        if (Page - 1 > 0) {
            setPage(Page - 1)
        }
    }

    const handleNext = () => {
        if (Page + 1 <= maxPage) {
            setPage(Page + 1)
        }
    }

    return (
        <div className='pagination'>
            <ul className='pagination-list'>
                <li className='pagination-item page-active' onClick={handlePrevious}>&#60;</li>
                {
                    arrPages.map(e => (
                        <li className={`pagination-item ${Page === e && 'page-active'}`} onClick={() => handlePage(e)} key={e}>{e}</li>
                    ))
                }
                <li className='pagination-item page-active' onClick={handleNext}>&#62;</li>
            </ul>
        </div>

    )
}

export default Pagination