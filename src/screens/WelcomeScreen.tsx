import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Heading, Input, Center, Button, Image, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";

interface Props extends NativeStackScreenProps<any, any>{}




export const WelcomeScreen = ({navigation}: Props) => {
    return (
        <Box  bg={'blue.400'} 
        alignItems={'center'}  
        justifyContent={'center'} 
        flexDir={'column'}
        position={"absolute"}
        left={0}
        top={0}
        w={Dimensions.get('window').width}
        h={Dimensions.get('window').height}>
            
            

            <Heading>
          Carrito
            </Heading>

        </Box>
        



        
    )
}