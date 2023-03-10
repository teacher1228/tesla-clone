import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section
      title="Model S"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="Custom Order"
      rightBtnText="EXISTING INVERTORY"
      />
      <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="EXISTING INVERTORY"
      />
    <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="EXISTING INVERTORY"
    />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="EXISTING INVERTORY"
    />
            <Section
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Custom Order"
          rightBtnText="EXISTING INVERTORY"
    />
                <Section
          title="Solar for New Roofs"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Custom Order"
          rightBtnText="EXISTING INVERTORY"
    />
        <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="SHOP now"
          
    />
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;

`