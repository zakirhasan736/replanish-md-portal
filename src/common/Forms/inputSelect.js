import React from 'react'
import { Select } from 'antd';

const InputSelect = ({placeText , defaoultValue}) => {
  const items = [
    {
      id: 1,
      labels: 'caqncel',
    },
    {
      id: 2,
      labels: 'testry',
    }
  ]
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='input-select-items'>
    <Select
      style={{
        width: '100%',
      }}
      placeholder={placeText}
      defaultValue={defaoultValue}
      dropdownRender={(menu) => (
        <>
          {menu}
        </>
      )}
      options={items.map((item) => ({
        label: item.labels,
        value: item.id,
      }))}
    />
    </div>
  )
}

export default InputSelect
