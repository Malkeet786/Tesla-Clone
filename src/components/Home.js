import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backGroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backGroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory" />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backGroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
                 />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backGroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exsisting Inventory"
            />
            <Section
                title="Lowest Cost Solar Pannel"
                description="Money-back gurantee"
                backGroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More" 
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less than a New Roof"
                backGroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More" 
            />
            <Section 
                title="Accessories"
                description="Solar Roof Costs Less than a New Roof"
                backGroundImg="accessories.jpg"
                leftBtnText="Shop now"
                // rightBtnText="Learn More"
            />
            
        </Container>
    )
}

export default Home

const Container=styled.div`
     height:100vh;
`
