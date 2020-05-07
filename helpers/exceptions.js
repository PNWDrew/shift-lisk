'use strict';
/**
 * @namespace exceptions
 * @memberof module:helpers
 * @property {object} slots (id: [expected generator, received generator])
 * @property {object} genesisPublicKey
 * @property {string} genesisPublicKey.mainnet
 * @property {string} genesisPublicKey.testnet
 * @property {array[]} rounds
 * @property {array[]} senderPublicKey
 * @property {array[]} signatures
 * @property {array[]} secondSignatures
 * @property {array[]} multisignatures
 * @property {object} addresses
 * @property {array[]} balance
 * @property {object} votes: (id: true = apply || false = ignore)
 */	
module.exports = {
	blockRewards: [],
	slots: {
		'1206126':['ccf69a11b7b309964819eaa4e02952f0c6a134c0b080f89b67dc8a18c43b6d3b','d26a500bc92e20fe99fb3512dc39e7d628864d0962d1f0f724070bc1b3311188'],
		'1206130':['b71d07a5ecf8d78a7454ee09831b9956ddf3d2021b3871a63bf7e6dada44b5d4','bc0bba8b0f3e0e6d21028f6e28be766d5cc16c0c0b501992b5a247149bfc0e6a'],
		'1206139':['59f8959b82658537d074ce9ccbc12bd54eba706152aee64cbd111dfc9003e78c','5a5c42f761da6394e749188bbab8074f23b55c471cf54323550b58c1cbd53bce'],
		'1206152':['d27ccbcddb9658d7754bae0f0eff3df5b2f219e118bbe9d37bb265e89186a38c','d91336b5e59509a52a1ec8bf22572e60ef44cb0fe0cac887d77062239e12ec1e'],
		'1206155':['d9a81d7085da158c7a685318365aa1763737ae7fae815a91bb5061ba281e21e7','dddca01fb238749ca5a05a9c811508f7eeca1a1ca3adf1b8381daaadfe9b29ef'],
		'1206158':['9174737bef7ee610291762557001b98e7f2981a060c9ce77131af90e0d0caf9f','936cb861fc17add677d924e9f5cb5bb6dbc752ac0339da83dc47823994f1e9cd'],
		'1206161':['591967ea3241d37119935d380c4719cc83b829be2e18f631c421f5a01f1151fe','598e072dac75eb26645a9104ba97ef64d34723e52de597242bc6d9255a966982'],
		'1206165':['be7f6d76b70f455a23a94c5942efa74edfed67a6b3c33e2f88e301a1f5fc536b','c11a57311c2e8462143677f7e1b9a8bcb244d86d82384672d5a302983c98d1c5'],
		'1206168':['6cbe740a78e405d6c1f1a5e687dfcd7fd236c75246fb0a9971c571c2412b6e6d','7a3faba8fd01346a6b9ab8a057c724c69a716d58d35b0808764f5b2d7d619935'],
		'1206177':['8b9d0bd3d4ded19011c11364698488bf13e4f13fbf129da45b098244eafa9051','8f444b5cd643b33cf2a98003085fedeaa67f972f8e16eb568d9df85b221bf08a'],
		'1206178':['8123e9b4c0439b8cbb2eda9e83f874d3255b178414d5223e8e45945d125b6b43','882f6c2766676d5fc46774d45137a1b234891fa63fc68ba67ec28ed5a5f55406'],
		'1206185':['dddca01fb238749ca5a05a9c811508f7eeca1a1ca3adf1b8381daaadfe9b29ef','dde9927f4105a65a8eb53df84fb6822ff1bcbc932f1ee539a70b0c619d52495d'],
		'1206186':['7dd941c37d511a68bec61e11dd9dff9f3bd699dcf181190941fe37a1968b896a','7e5e513102a3d840f3b083801b8dafaccca40e9cf6a068a48378bcdcfabef666'],
		'1206192':['5f1a80da7a81f5fde23667269aeb7b015fe4726f3fce6bb1dad3ba440419777a','61b3a6072f97044044b71e4449470515952cf1439a561e6e6f1dee86173f516b'],
		'1206193':['c62bc560bfdcec58295fae94f24c23d228ad0055c8eb8bbf254723258b6e4bec','ccf69a11b7b309964819eaa4e02952f0c6a134c0b080f89b67dc8a18c43b6d3b'],
		'1206194':['6b365d720b6a672b284ba4dd8db1b7cc068ec76f19fa674f8faf406178b0a618','58b5afc0ed5104d30b41eb0ae626db2e9468add22bf7f881d717502e866d60f5'],
		'1206197':['7a3faba8fd01346a6b9ab8a057c724c69a716d58d35b0808764f5b2d7d619935','7dd941c37d511a68bec61e11dd9dff9f3bd699dcf181190941fe37a1968b896a'],
		'1206198':['6b837ca3a6118e6b0fc3daef024a26c72c52f70a3c364918eec6bbb76703bc2a','6bd990a6180793f3a757a087f76523c20e56a0265ae7ea4185e6c0fba968cb07'],
		'1206206':['58b5afc0ed5104d30b41eb0ae626db2e9468add22bf7f881d717502e866d60f5','591967ea3241d37119935d380c4719cc83b829be2e18f631c421f5a01f1151fe'],
		'1206207':['b2e8f7fb9988e01d5cb4714f1aa1837342cf74832b13734cdcaa3f9e30bdcc54','b71d07a5ecf8d78a7454ee09831b9956ddf3d2021b3871a63bf7e6dada44b5d4'],
		'1206208':['c11a57311c2e8462143677f7e1b9a8bcb244d86d82384672d5a302983c98d1c5','c168cb6adae2dcecc70c0296788cc010b1de41acc556223c92d2c5463c811ae0'],
		'1206211':['5eb39be949dce2e452ad36b485cd63eba1166334e34c471da764a336fc458c0b','5f1a80da7a81f5fde23667269aeb7b015fe4726f3fce6bb1dad3ba440419777a'],
		'1206216':['6bd990a6180793f3a757a087f76523c20e56a0265ae7ea4185e6c0fba968cb07','6c0a719ef8783420022643e7f43506925bafbf5ff8ba905ec63797a7d457faad'],
		'1206217':['c168cb6adae2dcecc70c0296788cc010b1de41acc556223c92d2c5463c811ae0','c62bc560bfdcec58295fae94f24c23d228ad0055c8eb8bbf254723258b6e4bec'],
		'1206220':['6c0a719ef8783420022643e7f43506925bafbf5ff8ba905ec63797a7d457faad','6cbe740a78e405d6c1f1a5e687dfcd7fd236c75246fb0a9971c571c2412b6e6d'],
		'1206221':['7e5e513102a3d840f3b083801b8dafaccca40e9cf6a068a48378bcdcfabef666','8123e9b4c0439b8cbb2eda9e83f874d3255b178414d5223e8e45945d125b6b43'],
		'1206231':['b71d07a5ecf8d78a7454ee09831b9956ddf3d2021b3871a63bf7e6dada44b5d4','bc0bba8b0f3e0e6d21028f6e28be766d5cc16c0c0b501992b5a247149bfc0e6a'],
		'1206237':['6bd990a6180793f3a757a087f76523c20e56a0265ae7ea4185e6c0fba968cb07','6c0a719ef8783420022643e7f43506925bafbf5ff8ba905ec63797a7d457faad'],
		'1206241':['d9a81d7085da158c7a685318365aa1763737ae7fae815a91bb5061ba281e21e7','dddca01fb238749ca5a05a9c811508f7eeca1a1ca3adf1b8381daaadfe9b29ef'],
		'1206250':['8979167251ac2b4f0984b6f4e9d12970aefec37dbcd59b6d9a8a56abcc78816b','8b9d0bd3d4ded19011c11364698488bf13e4f13fbf129da45b098244eafa9051'],
		'1206251':['598e072dac75eb26645a9104ba97ef64d34723e52de597242bc6d9255a966982','59f8959b82658537d074ce9ccbc12bd54eba706152aee64cbd111dfc9003e78c'],
		'1206252':['dddca01fb238749ca5a05a9c811508f7eeca1a1ca3adf1b8381daaadfe9b29ef','dde9927f4105a65a8eb53df84fb6822ff1bcbc932f1ee539a70b0c619d52495d'],
		'1206258':['5eb39be949dce2e452ad36b485cd63eba1166334e34c471da764a336fc458c0b','5f1a80da7a81f5fde23667269aeb7b015fe4726f3fce6bb1dad3ba440419777a'],
		'1206259':['b2e8f7fb9988e01d5cb4714f1aa1837342cf74832b13734cdcaa3f9e30bdcc54','b71d07a5ecf8d78a7454ee09831b9956ddf3d2021b3871a63bf7e6dada44b5d4'],
		'1206260':['61b3a6072f97044044b71e4449470515952cf1439a561e6e6f1dee86173f516b','63b18bf11a0d1382e505fae74c2d4f33f2ea32d44d3ca6907940dcda124ffa62'],
		'1206261':['9e8776e938ed492246de6caa1b4c4a8c91bde9509a4c1a522d3cb1253b315c53','b2e8f7fb9988e01d5cb4714f1aa1837342cf74832b13734cdcaa3f9e30bdcc54'],
		'1206276':['591967ea3241d37119935d380c4719cc83b829be2e18f631c421f5a01f1151fe','598e072dac75eb26645a9104ba97ef64d34723e52de597242bc6d9255a966982'],
		'1206283':['d91336b5e59509a52a1ec8bf22572e60ef44cb0fe0cac887d77062239e12ec1e','d9a81d7085da158c7a685318365aa1763737ae7fae815a91bb5061ba281e21e7'],
		'1206284':['882f6c2766676d5fc46774d45137a1b234891fa63fc68ba67ec28ed5a5f55406','8979167251ac2b4f0984b6f4e9d12970aefec37dbcd59b6d9a8a56abcc78816b'],
		'1206285':['6c0a719ef8783420022643e7f43506925bafbf5ff8ba905ec63797a7d457faad','6cbe740a78e405d6c1f1a5e687dfcd7fd236c75246fb0a9971c571c2412b6e6d'],
		'1206286':['c168cb6adae2dcecc70c0296788cc010b1de41acc556223c92d2c5463c811ae0','c62bc560bfdcec58295fae94f24c23d228ad0055c8eb8bbf254723258b6e4bec'],
		'1206292':['d27ccbcddb9658d7754bae0f0eff3df5b2f219e118bbe9d37bb265e89186a38c','d91336b5e59509a52a1ec8bf22572e60ef44cb0fe0cac887d77062239e12ec1e'],
		'1206293':['c62bc560bfdcec58295fae94f24c23d228ad0055c8eb8bbf254723258b6e4bec','ccf69a11b7b309964819eaa4e02952f0c6a134c0b080f89b67dc8a18c43b6d3b'],
		'1206294':['59f8959b82658537d074ce9ccbc12bd54eba706152aee64cbd111dfc9003e78c','5a5c42f761da6394e749188bbab8074f23b55c471cf54323550b58c1cbd53bce'],
		'1206295':['5f1a80da7a81f5fde23667269aeb7b015fe4726f3fce6bb1dad3ba440419777a','61b3a6072f97044044b71e4449470515952cf1439a561e6e6f1dee86173f516b'],
		'1206298':['d26a500bc92e20fe99fb3512dc39e7d628864d0962d1f0f724070bc1b3311188','d27ccbcddb9658d7754bae0f0eff3df5b2f219e118bbe9d37bb265e89186a38c'],
		'1206304':['5a5c42f761da6394e749188bbab8074f23b55c471cf54323550b58c1cbd53bce','5eb39be949dce2e452ad36b485cd63eba1166334e34c471da764a336fc458c0b'],
		'1206305':['8f444b5cd643b33cf2a98003085fedeaa67f972f8e16eb568d9df85b221bf08a','9174737bef7ee610291762557001b98e7f2981a060c9ce77131af90e0d0caf9f'],
		'1206309':['be7f6d76b70f455a23a94c5942efa74edfed67a6b3c33e2f88e301a1f5fc536b','c11a57311c2e8462143677f7e1b9a8bcb244d86d82384672d5a302983c98d1c5'],
		'1206310':['8123e9b4c0439b8cbb2eda9e83f874d3255b178414d5223e8e45945d125b6b43','882f6c2766676d5fc46774d45137a1b234891fa63fc68ba67ec28ed5a5f55406'],
		'1206311':['bc0bba8b0f3e0e6d21028f6e28be766d5cc16c0c0b501992b5a247149bfc0e6a','be7f6d76b70f455a23a94c5942efa74edfed67a6b3c33e2f88e301a1f5fc536b'],
		'1206315':['6b365d720b6a672b284ba4dd8db1b7cc068ec76f19fa674f8faf406178b0a618','58b5afc0ed5104d30b41eb0ae626db2e9468add22bf7f881d717502e866d60f5'],
		'1206317':['ccf69a11b7b309964819eaa4e02952f0c6a134c0b080f89b67dc8a18c43b6d3b','d26a500bc92e20fe99fb3512dc39e7d628864d0962d1f0f724070bc1b3311188'],
		'1206318':['6b837ca3a6118e6b0fc3daef024a26c72c52f70a3c364918eec6bbb76703bc2a','6bd990a6180793f3a757a087f76523c20e56a0265ae7ea4185e6c0fba968cb07'],
		'1206322':['7e5e513102a3d840f3b083801b8dafaccca40e9cf6a068a48378bcdcfabef666','8123e9b4c0439b8cbb2eda9e83f874d3255b178414d5223e8e45945d125b6b43'],
		'1206323':['63b18bf11a0d1382e505fae74c2d4f33f2ea32d44d3ca6907940dcda124ffa62','6b837ca3a6118e6b0fc3daef024a26c72c52f70a3c364918eec6bbb76703bc2a'],
		'1206324':['9174737bef7ee610291762557001b98e7f2981a060c9ce77131af90e0d0caf9f','936cb861fc17add677d924e9f5cb5bb6dbc752ac0339da83dc47823994f1e9cd']
	},
	genesisPublicKey: {
		mainnet: '3c4bd532ef8a90c0105f1b21458abf652b1e7ca100f664c39a3bbfc2e682efef',
		testnet: '03f5d49d8bf116e59c2306d40f03c35fcb6a8ac12932203460c8ece4d69ea0f4'
	},
	rounds: {
	},
	senderPublicKey: [
	],
	signatures: [
	],
	secondSignatures: [
		'16660073223957688536', // 2113204
	],
	multisignatures: [
	],
	addresses: {
		'5326325652511099958': '176934970727722387831S', // 641715
		'14093812888279257769': '176934970727722387831S' // 1501992
 	},
	balance: [
	],
	votes: {
		'14501018843206599286': false // 576503
	}
};
