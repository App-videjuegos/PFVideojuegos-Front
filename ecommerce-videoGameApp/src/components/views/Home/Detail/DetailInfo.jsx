import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";

const DetailInfo = (props) => {
  const [ratingV, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const { name, description, price, rating, image } = props.propInfo;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const putRating = () => {
    alert(`Score ${ratingV} has been set successfully`);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const submitComment = () => {
    if (comment.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        text: comment,
      };

      setComments([...comments, newComment]);
      setComment("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.gameName}>{name}</Text>
        <View style={styles.ratingContainer}>
          <AirbnbRating
            count={5}
            defaultRating={rating}
            size={20}
            showRating={false}
            selectedColor="gold"
            onFinishRating={handleRating}
          />
          <Text style={styles.textRating} onPress={putRating}>
            Add your rating
          </Text>
          <Text> Score: {ratingV}</Text>
        </View>
        <Text style={[styles.gamePrice, { color: "#1B063E" }]}>$ {price}</Text>
        <TouchableOpacity onPress={() => console.log("Añadir al carrito")}>
          <View style={[styles.button, { backgroundColor: "#622EDA" }]}>
            <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.gameDescription}>
          {showFullDescription
            ? description
            : `${description.substring(0, 300)}...`}
        </Text>
        {!showFullDescription && (
          <TouchableOpacity onPress={toggleDescription}>
            <View style={[styles.button, { backgroundColor: "#622EDA" }]}>
              <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                Read More
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {showFullDescription && (
          <TouchableOpacity onPress={toggleDescription}>
            <View style={[styles.button, { backgroundColor: "#622EDA" }]}>
              <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                Retract
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.commentsContainer}>
          <Text style={styles.textRating}>Comments</Text>
          {comments.map((comment) => (
            <View key={comment.id} style={styles.comment}>
              {/*<Image style={styles.avatar} source={{ uri: comment.user.avatar }} />*/}
              <View style={styles.commentContent}>
                {/*<Text style={styles.commentUser}>{comment.user.name}</Text>*/}
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            </View>
          ))}
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment"
            value={comment}
            onChangeText={handleCommentChange}
          />
          <Button title="Submit" onPress={submitComment} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    width: "90%",
    alignContent: "center",
  },
  image: {
    width: 375,
    height: 361,
    marginLeft: -7,
    position: "relative",
    alignContent: "center",
    resizeMode: "cover",
    alignSelf: "center",
  },
  gameName: {
    color: "#1B063E",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 48,
    marginBottom: 10,
    alignSelf: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 5,
    padding: 5,
  },
  gamePrice: {
    color: "#1B063E",
    fontStyle: "normal",
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 10,
    justifySelf: "start",
  },
  gameDescription: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "justify",
    marginBottom: 10,
  },
  commentsContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  textRating: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#496BFF",
    paddingLeft: 20,
  },
  button: {
    width: 315.337,
    height: 41.945,
    alignSelf: "stretch",
    borderRadius: 8,
  },
  buttonText: {
    width: 86.279,
    color: "#FFF",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 40,
    textAlign: "justify",
    alignSelf: "center",
  },
  comment: {
    backgroundColor: "#EEE",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default DetailInfo;
