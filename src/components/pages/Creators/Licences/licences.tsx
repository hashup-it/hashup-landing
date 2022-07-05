import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Image, SlideFade, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Colors } from '../../../../colors';
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton';
import CartridgeInfo from './cartridgeInfo';
import { Cartridges } from './cartridges';

export const Licences = () => {
	const ref = useRef(null);
	const { enterCount } = useInViewport(ref, {}, { disconnectOnLeave: false }, {});

	const [activeCartridge, setActiveCartridge] = useState<number>(0);

	const handleChange = (dir: number) => {
		if (dir === 1 && activeCartridge < Cartridges.length - 1) setActiveCartridge(activeCartridge + 1);
		else if (dir === 0 && activeCartridge > 0) setActiveCartridge(activeCartridge - 1);
	};

	return (
		<>
			<SlideFade in={enterCount > 0} offsetY="25vh">
				<Flex
					justifyContent={{ base: 'center', xl: 'space-between' }}
					mt="200px"
					ml={{ base: '0', xl: '10.5%' }}
					mr={{ base: '0' }}
					position="relative"
					ref={ref}
					mb={{ base: '35vh', md: '60vh', xl: '10vh' }}
				>
					<Flex flexDirection="column" gridGap={{ base: '3rem', xl: '60px' }} pb={['40px', '60px', '100px', '100px']}>
						<SectionInfoButton label="LICENCES" zIndex="1" />
						<Flex gridGap="25px">
							<Flex position="relative" onClick={() => setActiveCartridge(0)} cursor="pointer">
								Gold
								{activeCartridge === 0 && (
									<Flex
										position="absolute"
										bottom="-20%"
										left="0"
										h="1px"
										w="1vw"
										bgColor={Colors.brandMain}
									/>
								)}
							</Flex>
							<Flex position="relative" onClick={() => setActiveCartridge(1)} cursor="pointer">
								Gray
								{activeCartridge === 1 && (
									<Flex
										position="absolute"
										bottom="-20%"
										left="0"
										h="1px"
										w="1vw"
										bgColor={Colors.brandMain}
									/>
								)}
							</Flex>
							<Flex position="relative" onClick={() => setActiveCartridge(2)} cursor="pointer">
								Custom
								{activeCartridge === 2 && (
									<Flex
										position="absolute"
										bottom="-20%"
										left="0"
										h="1px"
										w="1vw"
										bgColor={Colors.brandMain}
									/>
								)}
							</Flex>
						</Flex>
						<CartridgeInfo
							color={Cartridges[activeCartridge].color}
							description={Cartridges[activeCartridge].description}
							supply={Cartridges[activeCartridge].supply}
							fee={Cartridges[activeCartridge].fee}
							price={Cartridges[activeCartridge].price}
							colorDesc={Cartridges[activeCartridge].colorDesc}
						/>
					</Flex>
					<Flex position="absolute" right={{ base: '0%', xl: '-4%' }} top={{ base: '110%', xl: '10%' }}>
						<Image src={`assets/${Cartridges[activeCartridge].image}`} zIndex="1" />
						<Flex
							position="absolute"
							top="-10%"
							left="-5%"
							bg={Cartridges[activeCartridge].gradient}
							borderRadius="50%"
							filter="blur(150px)"
							h={["250px", "250px", "300px", "300px"]}
							w={["250px", "250px", "300px", "300px"]}
							zIndex="0"
							opacity="0.5"
						/>
						<Flex
							position="absolute"
							bottom="-10%"
							right="-5%"
							bg={Cartridges[activeCartridge].gradient}
							borderRadius="50%"
							filter="blur(150px)"
							h={["250px", "250px", "300px", "300px"]}
							w={["250px", "250px", "300px", "300px"]}
							zIndex="0"
							opacity="0.5"
						/>
						{activeCartridge > 0 && (
							<Flex
								position="absolute"
								top="calc(50% - 40px)"
								left="5%"
								bgColor={Colors.brandMain}
								p={{ base: '14px', md: '18px', xl: '20px' }}
								borderRadius="5px"
								zIndex="100"
								cursor="pointer"
								onClick={() => handleChange(0)}
							>
								<ChevronLeftIcon />
							</Flex>
						)}
						{activeCartridge < Cartridges.length - 1 && (
							<Flex
								position="absolute"
								top="calc(50% - 35px)"
								right="5%"
								bgColor={Colors.brandMain}
								p={{ base: '14px', md: '18px', xl: '20px' }}
								borderRadius="5px"
								zIndex="100"
								cursor="pointer"
								onClick={() => handleChange(1)}
							>
								<ChevronRightIcon />
							</Flex>
						)}
					</Flex>
				</Flex>
			</SlideFade>
		</>
	);
};

export default Licences;
