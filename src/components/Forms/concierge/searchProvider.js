import React from 'react'
import InputSelect from 'src/common/Forms/inputSelect';

const SearchProvider = () => {
    return (
        <div className='search-provider-widgets'>
            <h4 className='widgets-title'>Search Provider </h4>
            <div className='widgets-main-cont'>
                <InputSelect placeText='Select Name' />
                <InputSelect placeText='Select Department' />
                <InputSelect placeText='Select Availability' />
                <button className='black-button search-act-btn'>Search</button>
            </div>
            <p className='desc-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dictum ullamcorper quis .</p>
        </div>
    )
}

export default SearchProvider
