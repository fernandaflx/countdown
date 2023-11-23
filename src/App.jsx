import { Box, Center, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import background from './assets/background.svg'

const CountdownTimer = () => {
  const targetDate = new Date("2023-11-25T06:20:00").getTime();
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const numbers = [
    { label: 'DIAS', value: remainingTime.days },
    { label: 'HORAS', value: remainingTime.hours },
    { label: 'MINUTOS', value: remainingTime.minutes },
    { label: 'SEGUNDOS', value: remainingTime.seconds },
  ];

  return (
    // <Flex width='100vw' height='100vh' flexDir='column' align='center' justify='center' backgroundImage={background} backgroundSize='cover' >
    //   <Stack height='100vh' align='center' justify='center'>
    //     <Text textAlign='center' fontSize='3vw' color='#fefefe'>
    //       Contando os dias pra te ver <span role="img" style={{ fontSize: '2vw' }} aria-label="coração">❤️</span>
    //     </Text>
    //     <HStack align='center'>

    //       {numbers.map((number, i) => (
    //         <Box align='center' key={i}>
    //           <Center
    //             width='9vw' height='10vw'
    //             borderRadius='14px' bg='#CBC0D3' fontSize='7vw'>
    //             {number.value}
    //           </Center>

    //           <Text
    //             fontSize='1.5vw' mt='1.5vw'
    //             color='#fefefe'
    //           >
    //             {number.label}
    //           </Text>
    //         </Box>
    //       ))}
    //     </HStack>

    //   </Stack>
    // </Flex>

    <Flex width='100vw' height='100vh' flexDir='column' align='center' justify='center' backgroundImage={background} backgroundSize='cover'>
      <Stack height='100vh' align='center' justify='center'>
        <Text textAlign='center' fontSize={['5vw', '3vw', '2vw']} color='#fefefe'>
          Contando os dias pra te ver <span role="img" style={{ fontSize: '2vw' }} aria-label="coração">❤️</span>
        </Text>
        <HStack align='center'>

          {numbers.map((number, i) => (
            <Box align='center' key={i}>
              <Center
                width={['20vw', '15vw', '9vw']} height={['20vw', '15vw', '10vw']}
                borderRadius='14px' bg='#CBC0D3' fontSize={['10vw', '7vw', '5vw']}>
                {number.value}
              </Center>

              <Text
                fontSize={['3vw', '2vw', '1.5vw']} mt={['1.5vw', '1vw', '0.5vw']}
                color='#fefefe'
              >
                {number.label}
              </Text>
            </Box>
          ))}
        </HStack>
      </Stack>
    </Flex>

  );
};

export default CountdownTimer;
