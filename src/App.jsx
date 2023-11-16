import { Box, Center, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2023-11-25T00:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // O tempo já passou, então exibimos 0 para todos os campos
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
    { label: 'DAYS', value: remainingTime.days },
    { label: 'HOURS', value: remainingTime.hours },
    { label: 'MINUTES', value: remainingTime.minutes },
    { label: 'SECONDS', value: remainingTime.seconds },
  ];

  return (
    <Flex width='full' height='full' flexDir='column' align='center' justify='center' >
      <Stack height='100vh' align='center' justify='center'>
        <Text textAlign='center'>waiting for u</Text>
        <HStack align='center'>

          {numbers.map((number, i) => (
            <Box align='center' key={i}>

              <Center width='6.5rem' height='7rem' bg='black' borderRadius='14px' fontSize='4rem'>
                {number.value}
              </Center>

              <Text fontSize='32px'>
                {number.label}
              </Text>
            </Box>
          ))}
        </HStack>

      </Stack>
      {/* <p>{`${remainingTime.days} days, ${remainingTime.hours} hours, ${remainingTime.minutes} minutes, ${remainingTime.seconds} seconds`}</p> */}
    </Flex>
  );
};

export default CountdownTimer;
