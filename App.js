import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
//Para agregar la dependencia se usa ---> yarn expo install expo-local-authentication
//https://docs.expo.dev/versions/latest/sdk/local-authentication/#localauthenticationoptions

function autenticar() {
  const auth = LocalAuthentication.authenticateAsync({
    promptMessage:"Confirma tu identidad",
    fallbackLabel:"Ingresa tu contraseña"
  })
  auth.then(resultado =>{
    console.log(resultado)
  })
}
async function tienesSensores() {
    const soporte = await LocalAuthentication.hasHardwareAsync()
    console.log(soporte)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={ () => {
          console.log(tienesSensores())
          autenticar()
        }}
        color={"purple"}
        title={"huella"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
