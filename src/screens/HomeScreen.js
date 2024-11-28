import {Button, View} from 'react-native'

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
       onPress={() => navigation.navigate('Notifications')}
       title='Go to notifications'
      />
      <Button
       onPress={() => navigation.navigate('Login')}
       title='Log out'
      />
    </View>
  );
}

export default HomeScreen;