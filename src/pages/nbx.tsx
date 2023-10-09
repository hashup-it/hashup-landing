import { Button, Flex, Image, Input, Link, Text } from '@chakra-ui/react';
import Airtable from 'airtable';
import { ethers } from 'ethers';
import React, { useEffect, useReducer, useState } from 'react';
import { Colors } from '../colors';
import { abi } from '../utils/abi';
import { openerAbi } from '../utils/openerAbi';
import { ActionTypes, eventFormInitialState, eventFormReducer } from '../utils/reducers/eventFormReducer';

const Nbx = () => {
	const [formState, dispatchForm] = useReducer(eventFormReducer, eventFormInitialState);
	const [formDisabled, setFormDisabled] = useState(true);
	const tickets = [
		{ name: 'General', address: '0x778B707F5f7910565aa2Ca7c4dCe5D5684F38052' },
		{ name: 'Startup', address: '0x6CbF4648D1f326585f7aA768913991EFC0f2b952' },
		{ name: 'Investor', address: '0x9b670efbe409834fa631588b0c75df403ec4333e' },
		{ name: 'VIP', address: '0x29790a7858015072f94c03e5761b98d7fe4de9a3' },
	];
	const [ticketState, setTicketState] = useState<boolean[]>([...new Array(tickets.length).fill(false)]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [account, setAccount] = useState(null);
	const [success, setSuccess] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if ((window as any).ethereum) {
			connectHandler();
			(window as any).ethereum.on('accountsChanged', accountsChanged);
		}
	}, []);

	const connectHandler = async () => {
		if ((window as any).ethereum) {
			try {
				const res = await (window as any).ethereum.request({
					method: 'eth_requestAccounts',
				});
				await accountsChanged(res[0]);
			} catch (err) {
				console.error(err);
				setErrorMessage('There was a problem connecting to MetaMask');
			}
		} else {
			setErrorMessage('Install MetaMask');
		}
	};

	const accountsChanged = async newAccount => {
		setAccount(newAccount);
		try {
			if (account !== null)
				tickets?.forEach(async (ticket, index) => {
					const tokenContractAddress = ticket.address;
					const provider = new ethers.providers.Web3Provider((window as any as any).ethereum);
					const contract = new ethers.Contract(tokenContractAddress, abi, provider);
					//const decimals = await contract.decimals();
					console.log(account);
					const tokenBalance = await contract.balanceOf(account);
					if (+ethers.utils.formatUnits(tokenBalance, 2) >= 1) {
						if (formDisabled) setFormDisabled(false);
						setTicketState(prev => [...prev.slice(0, index), true, ...prev.slice(index + 1)]);
					}
				});
		} catch (err) {
			console.error(err);
			setErrorMessage('There was a problem connecting to MetaMask');
		}
	};

	const handleOpen = async (address: string, ticketType: string) => {
		if (formState.firstName.length > 0) {
			if (
				String(formState.email)
					.toLowerCase()
					.match(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
			) {
				setLoading(true);
				setSuccess(false);
				setErrorMessage('');

				if (account == null) {
					setErrorMessage('You login to open package.');
					return;
				}

				const provider = new ethers.providers.Web3Provider((window as any as any).ethereum);
				const signer = provider.getSigner();
				console.log('signer', signer);
				console.log({ address: address, email: formState.email });
				const openerContract = new ethers.Contract(
					'0x71db4E029C6EEf39bc98ca0A92719B600830Db25',
					openerAbi,
					signer
				);

				// Authenticate
				Airtable.configure({
					apiKey: 'patUXzE3i3AJxV7Z3.3b389e3e138f3f58ded1cfdcc2d8470d2c23320524dfa1be222d9a9770feda64',
				});

				// Initialize a base
				const base = Airtable.base('appxJzYsbNOMFke8a');

				openerContract
					.openPackage(address, formState.email)
					.then(() => {
						base('NBX').create(
							[
								{
									fields:
										formState.surname && formState.position && formState.company
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Surname: formState.surname,
													Position: formState.position,
													Company: formState.company,
													'Ticket type': ticketType,
											  }
											: formState.surname && formState.position
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Position: formState.position,
													Surname: formState.surname,
													'Ticket type': ticketType,
											  }
											: formState.surname && formState.company
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Surname: formState.surname,
													Company: formState.company,
													'Ticket type': ticketType,
											  }
											: formState.position && formState.company
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Position: formState.position,
													Company: formState.company,
													'Ticket type': ticketType,
											  }
											: formState.surname
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Surname: formState.surname,
													'Ticket type': ticketType,
											  }
											: formState.position
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Position: formState.position,
													'Ticket type': ticketType,
											  }
											: formState.company
											? {
													Email: formState.email,
													'First name': formState.firstName,
													Company: formState.company,
													'Ticket type': ticketType,
											  }
											: {
													Email: formState.email,
													'First name': formState.firstName,
													'Ticket type': ticketType,
											  },
								},
							],
							err => {
								if (err) {
									console.error(err);
									return;
								}
								setSuccess(true);
								setLoading(false);
							}
						);
					})
					.catch((e: any) => {
						console.log(e);
						setLoading(false);
						setErrorMessage('Something went wrong. Try again later.');
					});
			} else setErrorMessage('Please enter a valid email');
		} else setErrorMessage('Please provide your name');
	};

	useEffect(() => {
		if (account !== null) {
			accountsChanged(account);
		}
	}, [account]);

	return (
		<>
			{!success && (
				<Flex
					flexDir="column"
					gap="24px"
					align="center"
					minW="30vw"
					py="64px"
				>
					<Image
						src="https://k4s9m4j5.rocketcdn.me/wp-content/uploads/2022/09/logo_black_website.png.webp"
						h="150px"
					/>
					{formDisabled && (
						<Flex
							as="span"
							fontSize="15px"
							fontWeight="500"
						>
							Buy ticket first. You can do that on&nbsp;
							<Link
								href="https://www.gamexplorer.io"
								target="_blank"
								_hover={{ textDecoration: 'none' }}
							>
								<Text
									color="red"
									cursor="pointer"
								>
									gamexplorer.io
								</Text>
							</Link>
						</Flex>
					)}
					<Flex
						flexDir="column"
						gap="4px"
						w="100%"
					>
						<Text fontSize="12px">First name</Text>
						<Input
							disabled={formDisabled}
							value={formState.firstName}
							onChange={(e: any) =>
								dispatchForm({ type: ActionTypes.FIRSTNAME_CHANGE, payload: e.target.value })
							}
						/>
					</Flex>
					<Flex
						flexDir="column"
						gap="4px"
						w="100%"
					>
						<Text fontSize="12px">Email</Text>
						<Input
							disabled={formDisabled}
							value={formState.email}
							onChange={(e: any) =>
								dispatchForm({ type: ActionTypes.EMAIL_CHANGE, payload: e.target.value })
							}
						/>
					</Flex>
					<Flex
						flexDir="column"
						gap="4px"
						w="100%"
					>
						<Text fontSize="12px">Surname (optional)</Text>
						<Input
							disabled={formDisabled}
							value={formState.surname}
							onChange={(e: any) =>
								dispatchForm({ type: ActionTypes.SURNAME_CHANGE, payload: e.target.value })
							}
						/>
					</Flex>
					<Flex
						flexDir="column"
						gap="4px"
						w="100%"
					>
						<Text fontSize="12px">Position (optional)</Text>
						<Input
							disabled={formDisabled}
							value={formState.position}
							onChange={(e: any) =>
								dispatchForm({ type: ActionTypes.POSITION_CHANGE, payload: e.target.value })
							}
						/>
					</Flex>
					<Flex
						flexDir="column"
						gap="4px"
						w="100%"
					>
						<Text fontSize="12px">Company (optional)</Text>
						<Input
							disabled={formDisabled}
							value={formState.company}
							onChange={(e: any) =>
								dispatchForm({ type: ActionTypes.COMPANY_CHANGE, payload: e.target.value })
							}
						/>
					</Flex>
					<Text
						fontSize="12px"
						color="red"
						fontWeight="500"
					>
						{errorMessage}
					</Text>
					<Flex
						align="center"
						justify="space-between"
						gap="16px"
					>
						{ticketState.map((ticket, index) => {
							if (ticket)
								return (
									<Button
										key={index}
										isLoading={loading}
										disabled={formDisabled}
										bg={Colors.brandMain}
										_hover={{ bg: Colors.brandMain, opacity: '0.75' }}
										onClick={() => handleOpen(tickets[index].address, tickets[index].name)}
									>
										Get {tickets[index].name} ticket
									</Button>
								);
						})}
					</Flex>
				</Flex>
			)}
			{success && (
				<Flex
					flexDir="column"
					gap="24px"
					align="center"
					justify="center"
					minH="70vh"
				>
					<Text
						fontSize="48px"
						fontWeight="600"
						color={Colors.brandMain}
					>
						Success!
					</Text>
					<Text fontSize="16px">You will receive your ticket on provided email soon.</Text>
				</Flex>
			)}
		</>
	);
};

export default Nbx;
