import { Button, Flex, Input, Spinner, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { Colors } from '../../colors';
import { useAccount, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { ethers } from 'ethers';
import { abi } from '../../utils/abi';
import { openerAbi } from '../../utils/openerAbi';

enum OpenKeyStages {
	HASNT_CONNECTED,
	LOADING,
	LOADED,
	DOESNT_HAVE_KEY,
	SUBMITTED,
	SUCCESS,
	ERROR,
}

export default () => {
	const [stage, setStage] = useState<OpenKeyStages>(OpenKeyStages.LOADING);
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { address } = useAccount();

	const accountsChanged = async () => {
		try {
			const tokenContractAddress = router.query?.address as string;
			const provider = new ethers.providers.Web3Provider((window as any as any).ethereum);
			const contract = new ethers.Contract(tokenContractAddress, abi, provider);
			const tokenBalance = await contract.balanceOf(address);
			if (+ethers.utils.formatUnits(tokenBalance, 2) >= 1) {
				if (stage === OpenKeyStages.LOADING) setStage(OpenKeyStages.LOADED);
			} else setStage(OpenKeyStages.DOESNT_HAVE_KEY);
		} catch (err) {
			console.error(err);
			setStage(OpenKeyStages.ERROR);
			setErrorMessage('There was a problem connecting to MetaMask');
		}
	};

	const typeOptions: { [param: number]: () => React.ReactNode } = {
		[OpenKeyStages.LOADING]: () => (
			<>
				<Spinner />
			</>
		),
		[OpenKeyStages.LOADED]: () => (
			<>
				<Flex
					fontSize="24px"
					fontWeight="600"
					as="span"
					mb="24px"
				>
					Open your&nbsp;
					<Text
						as="span"
						color="#ff3f3f"
					>
						key
					</Text>
					.
				</Flex>
				<Flex
					flexDir="column"
					gap="4px"
					w="100%"
				>
					<Text fontSize="12px">Email</Text>
					<Input
						disabled={stage === OpenKeyStages.LOADING}
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
					/>
					{errorMessage && (
						<Text
							fontSize="12px"
							color="red"
							fontWeight="500"
						>
							{errorMessage}
						</Text>
					)}
				</Flex>

				<Button
					color="white"
					isLoading={stage === OpenKeyStages.SUBMITTED}
					disabled={stage === OpenKeyStages.LOADING}
					bg={Colors.brandMain}
					_hover={{ bg: Colors.brandMain, opacity: '0.75' }}
					onClick={() => handleOpen()}
					px="64px"
				>
					Open
				</Button>
			</>
		),
		[OpenKeyStages.DOESNT_HAVE_KEY]: () => (
			<Flex
				flexDir="column"
				align="center"
				gap="24px"
			>
				<Text fontSize="16px">You don't have this key.</Text>
				<Flex
					fontSize="16px"
					fontWeight="600"
				>
					In order to buy it visit&nbsp;
					<Link
						target="_blank"
						href={`https://www.explorer.hashup.it/game/${router?.query?.address}`}
						color="#ff3f3f"
					>
						GameXplorer
					</Link>
				</Flex>
			</Flex>
		),
		[OpenKeyStages.SUCCESS]: () => (
			<Flex
				flexDir="column"
				align="center"
				gap="24px"
			>
				<Text
					fontSize="48px"
					fontWeight="600"
					color={Colors.brandMain}
				>
					Success!
				</Text>
				<Text fontSize="16px">Your will receive your key soon.</Text>
				<Flex
					fontSize="16px"
					fontWeight="600"
				>
					For more keys please visit&nbsp;
					<Link
						target="_blank"
						href="https://www.explorer.hashup.it"
						color="#ff3f3f"
					>
						GameXplorer
					</Link>
				</Flex>
			</Flex>
		),
		[OpenKeyStages.ERROR]: () => (
			<Flex
				flexDir="column"
				align="center"
				gap="24px"
			>
				<Text
					fontSize="48px"
					fontWeight="600"
					color={Colors.brandMain}
				>
					Error.
				</Text>
				<Text fontSize="16px">Something went wrong. Try again later.</Text>
			</Flex>
		),
		[OpenKeyStages.HASNT_CONNECTED]: () => (
			<Flex
				flexDir="column"
				align="center"
				gap="24px"
			>
				<Text
					fontSize="48px"
					fontWeight="600"
					color={Colors.brandMain}
				>
					You are not connected
				</Text>
				<Text fontSize="16px">Please connect your wallet first.</Text>
			</Flex>
		),
	};

	const connectType = useMemo(() => {
		switch (stage) {
			case OpenKeyStages.LOADING:
				return OpenKeyStages.LOADING;
			case OpenKeyStages.LOADED:
				return OpenKeyStages.LOADED;
			case OpenKeyStages.DOESNT_HAVE_KEY:
				return OpenKeyStages.DOESNT_HAVE_KEY;
			case OpenKeyStages.SUCCESS:
				return OpenKeyStages.SUCCESS;
			case OpenKeyStages.ERROR:
				return OpenKeyStages.ERROR;
			case OpenKeyStages.HASNT_CONNECTED:
				return OpenKeyStages.HASNT_CONNECTED;
			default:
				return OpenKeyStages.LOADED;
		}
	}, [stage]);

	useEffect(() => {
		if (address !== undefined && router?.query?.address !== undefined) accountsChanged();
		if (address === undefined) setStage(OpenKeyStages.HASNT_CONNECTED);
	}, [address, router?.query?.address]);

	const handleOpen = () => {
		if (
			String(email)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			setStage(OpenKeyStages.SUBMITTED);
			setErrorMessage('');

			if (address == null) {
				setErrorMessage('You have to log in to open package.');
				return;
			}

			const provider = new ethers.providers.Web3Provider((window as any as any).ethereum);
			const signer = provider.getSigner();
			const openerContract = new ethers.Contract('0x71db4E029C6EEf39bc98ca0A92719B600830Db25', openerAbi, signer);

			openerContract
				.openPackage(router?.query?.address, email)
				.then(() => setStage(OpenKeyStages.SUCCESS))
				.catch((e: any) => {
					console.log(e);
					setStage(OpenKeyStages.ERROR);
					setErrorMessage('Something went wrong. Try again later.');
				});
		} else setErrorMessage('Please enter a valid email');
	};

	return (
		<Flex
			flexDir="column"
			gap="32px"
			align="center"
			py="64px"
		>
			{typeOptions[connectType]()}
		</Flex>
	);
};
