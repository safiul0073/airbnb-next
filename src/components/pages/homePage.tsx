import React from 'react'
import Carousel from '../ui/Carousel'
import { CardDataGenerate } from '../../utils/helper'
import { CardPropsType } from '../../../types'
import Card from '../ui/Card'

const HomePage = () => {
  return (
    <>
    <div className="my-2">
        <Carousel />
        <div className="my-4 py-4">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-6" >
                {
                    CardDataGenerate().map((item: CardPropsType, index: number) => (
                        <>
                            <Card key={index} />
                        </>
                    ))
                }
            </div>
        </div>
    </div>
    <div className="my-2">
        <Carousel
            title="Get partner for your next day"    
        />
        <div className="my-4 py-4">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-6" >
                {
                    CardDataGenerate().map((item: CardPropsType, index: number) => (
                        <Card key={index}
                            image='/images/partner1.jpeg'
                        />
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage