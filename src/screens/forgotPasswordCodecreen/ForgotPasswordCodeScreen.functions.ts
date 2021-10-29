import { sendCodeProps } from './ForgotPasswordCodeScreen.types';

export const sendCode = ({navigation}: sendCodeProps) => {
    //INGREGRATE WITH API
    navigation.navigate("Login");
} 