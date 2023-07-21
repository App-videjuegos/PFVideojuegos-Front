// GameRating.js
import React from "react";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const GameRating = ({ rating }) => {
  return (
    <View>
      <Text>Game Rating</Text>
      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={20}
        showRating={false}
        isDisabled
      />
      <Text>Average Rating: {rating}</Text>
    </View>
  );
};

export default GameRating;
