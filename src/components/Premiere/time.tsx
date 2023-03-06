import { Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Colors } from '../../colors';

export const Time = () => {
	const countDownDate = new Date('Jun 21, 2022 16:00:00').getTime();

	const [days, setDays] = useState<string>('20');
	const [hours, setHours] = useState<string>('05');
	const [minutes, setMinutes] = useState<string>('04');
	const [seconds, setSeconds] = useState<string>('57');

	// Update the count down every 1 second
	const x = setInterval(function () {
		// Get today's date and time
		const now = new Date().getTime();

		// Find the distance between now and the count down date
		const distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString());
		setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString());
		setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString());
		setSeconds(Math.floor((distance % (1000 * 60)) / 1000).toString());
	}, 1000);

	return (
		<Flex
			zIndex="1"
			gridGap={['5px', '10px', '20px', '40px']}
			letterSpacing="0.6em"
		>
			<Flex
				flexDirection="column"
				alignItems="center"
			>
				<Text
					fontSize={['32px', '46px', '60px', '80px']}
					lineHeight="100%"
					fontWeight="200"
					textAlign="center"
				>
					{days.length === 1 ? '0' + days : days}
				</Text>
				<Text
					color="white"
					fontSize={['7px', '14px', '14px', '14px']}
					fontWeight="600"
				>
					DAYS
				</Text>
			</Flex>
			<Text
				fontSize={['32px', '46px', '60px', '80px']}
				lineHeight="100%"
				fontWeight="200"
				color={Colors.brandMain}
				textAlign="center"
			>
				:
			</Text>
			<Flex
				flexDirection="column"
				alignItems="center"
			>
				<Text
					fontSize={['32px', '46px', '60px', '80px']}
					lineHeight="100%"
					fontWeight="200"
					textAlign="center"
				>
					{hours.length === 1 ? '0' + hours : hours}
				</Text>
				<Text
					color="white"
					fontSize={['7px', '14px', '14px', '14px']}
					fontWeight="600"
				>
					HOURS
				</Text>
			</Flex>
			<Text
				fontSize={['32px', '46px', '60px', '80px']}
				lineHeight="100%"
				fontWeight="200"
				textAlign="center"
				color={Colors.brandMain}
			>
				:
			</Text>
			<Flex
				flexDirection="column"
				alignItems="center"
			>
				<Text
					fontSize={['32px', '46px', '60px', '80px']}
					lineHeight="100%"
					fontWeight="200"
					textAlign="center"
				>
					{minutes.length === 1 ? '0' + minutes : minutes}
				</Text>
				<Text
					color="white"
					fontSize={['7px', '14px', '14px', '14px']}
					fontWeight="600"
				>
					MIN
				</Text>
			</Flex>
			<Text
				fontSize={['32px', '46px', '60px', '80px']}
				lineHeight="100%"
				fontWeight="200"
				textAlign="center"
				color={Colors.brandMain}
			>
				:
			</Text>
			<Flex
				flexDirection="column"
				alignItems="center"
			>
				<Text
					fontSize={['32px', '46px', '60px', '80px']}
					lineHeight="100%"
					fontWeight="200"
					textAlign="center"
				>
					{seconds.length === 1 ? '0' + seconds : seconds}
				</Text>
				<Text
					color="white"
					fontSize={['7px', '14px', '14px', '14px']}
					fontWeight="600"
				>
					SEC
				</Text>
			</Flex>
		</Flex>
	);
};

export default Time;
