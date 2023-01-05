import React from 'react'
import { Blocks } from 'react-loader-spinner'

const Loader = (isLoading) => {
  return (
    <div className='centrarLoading'>
                    {/* <img src='https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif'></img> */}
                    <Blocks
                        visible={isLoading}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>  
  )
}

export default Loader