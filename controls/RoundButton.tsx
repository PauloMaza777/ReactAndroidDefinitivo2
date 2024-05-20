import React, { PropsWithRef } from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

const styles =StyleSheet.create({
    button: {
        backgroundColor: '#78c426',
        borderRadius: 1000,
        padding: 12,
        alignItems: 'center',
      },
      buttonText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase',
      },
});

type RoundButtonProps = PropsWithRef<{
    title: String,
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}>;

function RoundButton(props: RoundButtonProps): React.JSX.Element {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
          </TouchableOpacity>
    );
}
export default RoundButton;