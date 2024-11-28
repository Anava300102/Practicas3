import React from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, Badge, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const ProfileScreen = () => {
  const { colorMode } = useColorMode();

  return (
    <ScrollView flex={1} bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.800'}>
      <Center flex={1} p={4}>
        <Box
          bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
          rounded="lg"
          shadow={6}
          width="90%"
          maxWidth="400px"
          p={6}
        >
          <VStack space={4} alignItems="center">
            <Avatar
              size="2xl"
              source={{
                uri: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/01/10/5ffacec89986b.r_d.302-169-0.jpeg',
              }}
            />
            <Text fontSize="2xl" fontWeight="bold">
              Angel Nava
            </Text>
            <Text fontSize="md" color="gray.500">
              angel@example.com
            </Text>
            <Text fontSize="sm" color="gray.400" italic>
              Desarrollador
            </Text>
            <Badge colorScheme="success" variant="solid" rounded="full" mt={2}>
              Activo
            </Badge>
          </VStack>

          <Divider my={4} />

          {/* Sección de biografía */}
          <VStack space={2}>
            <Text fontSize="md" fontWeight="medium">
              Biografía
            </Text>
            <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
              Me gustan todo tipo de deportes y soy muy atlético, me encanta escuchar musica es mi pasatiempo favorito
            </Text>
          </VStack>

          <Divider my={4} />

          {/* Sección de habilidades */}
          <VStack space={2}>
            <Text fontSize="md" fontWeight="medium">
              Habilidades
            </Text>
            <HStack space={2} flexWrap="wrap">
              <Badge colorScheme="info" variant="outline">
                React Native
              </Badge>
              <Badge colorScheme="info" variant="outline">
                JavaScript
              </Badge>
              <Badge colorScheme="info" variant="outline">
                UI/UX Design
              </Badge>
              <Badge colorScheme="info" variant="outline">
                Firebase
              </Badge>
            </HStack>
          </VStack>

          <Divider my={4} />

          {/* Redes sociales y medios de contacto */}
          <HStack space={4} justifyContent="center" alignItems="center">
            <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
              LinkedIn
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
              GitHub
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
              Email
            </Button>
          </HStack>

          <Divider my={4} />

          {/* Sección de detalles adicionales */}
          <VStack space={2} alignItems="flex-start">
            <Text fontSize="md" fontWeight="medium">
              Detalles adicionales
            </Text>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="sm" color="gray.500">
                Ubicación:
              </Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Aguascalientes, Mexico
              </Text>
            </HStack>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="sm" color="gray.500">
                Idiomas:
              </Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Español, Inglés
              </Text>
            </HStack>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="sm" color="gray.500">
                Experiencia:
              </Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                2 años
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default ProfileScreen;