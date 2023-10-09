export const openerAbi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'package',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'message',
				type: 'string',
			},
		],
		name: 'PackageOpened',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'package',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'message',
				type: 'string',
			},
		],
		name: 'openPackage',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];
