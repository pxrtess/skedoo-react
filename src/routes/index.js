import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/welcome";
import Home from "../pages/home";
import SingIn from "../pages/singin/index.js";
import InstSing from "../pages/singin/instituicao.js";
import RespSing from "../pages/singin/responsavel.js";
import EduSing from "../pages/singin/educador.js";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InstSing"
        component={InstSing}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RespSing"
        component={RespSing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EduSing"
        component={EduSing}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
