import React, { Component } from 'react';
import { Container } from 'native-base';
import FootSectionControlContainer from './FootSectionControlContainer.js';
import FootSectionRouterContainer from './FootSectionRouterContainer.js';

const FootSectionNavigatorContainer = (props) => {
    return (
        <Container>
            <FootSectionRouterContainer />
            <FootSectionControlContainer />
        </Container>
    );
};

export default FootSectionNavigatorContainer;