import { ConfigProvider } from 'antd'
import React from 'react'

const ConfigTheme = ({children}) => {
  return (
    <ConfigProvider
        theme={{
            components: {
                Modal: {
                    titleColor: '#B91C1C',
                },
                Tabs: {
                    inkBarColor: '#B91C1C',
                    itemSelectedColor: '#B91C1C',
                    itemHoverColor: '#B91C1C',
                },
                Input: {
                    activeBorderColor: "B91C1C",
                    hoverBorderColor: "B91C1C",
                },
            }
        }}
    >
        {children}
    </ConfigProvider>
  )
}

export default ConfigTheme