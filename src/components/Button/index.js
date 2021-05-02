import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ onPress, title, color, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.buttonContainer, backgroundColor: color }}>
            <Text style={{ ...styles.buttonText, color: textColor }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;