import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { PiPasswordBold } from 'react-icons/pi'


export const Login = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
            <Center>
                <Card maxW="lg" align='center'>
                    <CardHeader>
                        <Heading textAlign='center'>Login</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={BiUserCircle} color='gray.300' />
                                </InputLeftElement>
                                <Input type='text' placeholder='Enter User Name' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Icon as={PiPasswordBold} color='gray.300' />
                                </InputLeftElement>
                                <Input type={isShow ? 'text' : 'password'} placeholder='Enter Passsword' />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={() => setIsShow(!isShow)}>
                                        {isShow ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button colorScheme='teal' type='submit'>Submit</Button>
                        </Stack>
                    </CardBody>
                </Card>
            </Center>
        </Flex >
    )
}
