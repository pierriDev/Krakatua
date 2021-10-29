import { sendEmailProps } from './ForgotPasswordEmailScreen.types';

export const sendEmail = ({navigation}: sendEmailProps) => {
    //INGREGRATE WITH API
    navigation.navigate("ForgotPasswordCode");
} 