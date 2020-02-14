import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import {Container} from './styles';

export default function Details({route}) {
  const {car} = route.params;
  console.tron.log(car);
  return (
    <Container>
      <View>
        <Text>Details</Text>
      </View>
    </Container>
  );
}

Details.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Details.defaultProps = {
  route: PropTypes.object,
};
