const isAddressInAddresses = (addresses: string[], address: string) =>
	addresses.map(_ => _.toLowerCase()).includes(address?.toLowerCase());

const compareAddresses = (address1: string, address2: string) => address1?.toLowerCase() === address2?.toLowerCase();

export { isAddressInAddresses, compareAddresses };
