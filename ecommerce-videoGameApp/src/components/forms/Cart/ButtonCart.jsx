import { Badge } from "react-native-paper";
import { View, Text,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
const CartButton = ({ navigation }) => {
    // const [countBadge, setCountBadge]=useState(0);
    const countBadge=5
    // console.log("Cantidad den button:", countBadge);
    return (
      <View style={{ marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          {/* <Text>{countBadge}</Text> */}
          <MaterialCommunityIcons name="cart" 
        //   color={StringsDark.bordercolor} 
          size={30} />
          {countBadge > 0 && (
            <Badge  size={25} style={{ position: "absolute",top: -15,right: 17, 
            color:'#0222ff', 
            backgroundColor:'#14FC2B' 
        }
        }
            >
              {countBadge}
            </Badge>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  export default CartButton