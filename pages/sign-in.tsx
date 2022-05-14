import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Flex, Stack, Link, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Layout from '../components/others/Layout';
import SignInForm from '../components/forms/SignInForm';
import { ROUTES } from '../constants';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session?.user) {
    return {
      redirect: {
        destination: ROUTES.DASHBOARD,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const SignInPage = () => {
  return (
    <Layout title='Sign In'>
      <Flex
        minH='100vh'
        align='center'
        justify='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
          <Stack align='center'>
            <Heading fontSize='4xl'>Sign in to your account</Heading>
            <Text fontSize='lg' color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <SignInForm />
        </Stack>
      </Flex>
    </Layout>
  );
};

export default SignInPage;
