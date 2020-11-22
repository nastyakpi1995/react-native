import React from "react";
import { Container } from "../../components";
import SocialLogin from "../../Authentication/components/SocialLogin"
import { View } from "react-native";

const Login = () => (
    <Container footer={<SocialLogin />}>
        <View />
    </Container>
);

export default Login;