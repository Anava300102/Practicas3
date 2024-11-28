import {Button, View} from 'react-native'


function NotificacionsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
       onPress={() => navigation.navigate('Home')}
       title='Go to Home'
      />
      <Button
       onPress={() => navigation.navigate('Login')}
       title='Log out'
      />
    </View>
  );
}

export default NotificacionsScreen;