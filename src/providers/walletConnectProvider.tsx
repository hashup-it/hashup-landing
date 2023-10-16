// @ts-nocheck

import { Flex } from '@chakra-ui/react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { ReactNode } from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';

const chains = [polygon];
const walletConnectId = '4ec127aff4d521d12a7aa90f6a1362cb';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId: walletConnectId })]);

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: w3mConnectors({ projectId: walletConnectId, chains }),
	publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const WalletConnectProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Flex zIndex="1000000">
			<Web3Modal
				projectId={walletConnectId}
				ethereumClient={ethereumClient}
				enableAccountView={true}
				defaultChain={polygon}
				enableNetworkView
				themeVariables={{ '--w3m-background-color': '#ff3f3f', '--w3m-accent-fill-color': '#fff' }}
			/>
			<WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
		</Flex>
	);
};
