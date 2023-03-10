import { ChainInfoID } from '@xiti/cosmodal'

import { ChainPrefixIdMap } from '@dao-dao/types'

// Map DAO core address bech32 prefix (for example, 'terp' in juno10h0hc64jv...)
// to the chain ID it is on.

const testnet: ChainPrefixIdMap = {
  terp: ChainInfoID.Uni5,
}

const mainnet: ChainPrefixIdMap = {
  terp: ChainInfoID.Terpnet1,
}

export const ChainPrefixIdMaps = {
  testnet,
  mainnet,
}
