import {useState} from 'react';
import {Icon} from '../Icon';
import {TextInput, TextInputProps} from '../TextInput';

export function PasswordInput({...rest}: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const iconName = isPasswordVisible ? 'eyeOn' : 'eyeOff';

  return (
    <TextInput
      rightComponent={
        <Icon
          name={iconName}
          color="gray2"
          onPress={togglePasswordVisibility}
        />
      }
      secureTextEntry={isPasswordVisible}
      {...rest}
    />
  );
}
