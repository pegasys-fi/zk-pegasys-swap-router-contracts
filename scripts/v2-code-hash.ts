import { bytecode } from '@pegasys/v2-core/artifacts-zk/contracts/PegasysV2Pair.sol/PegasysV2Pair.json'
import { utils } from 'ethers'
import { utils as zkUtils } from 'zksync-web3'

async function main() {
    // Compute INIT_CODE_HASH
    const INIT_CODE_HASH = utils.hexlify(zkUtils.hashBytecode(bytecode))

    console.log('✅ Pegasys V2 INIT_CODE_HASH:', INIT_CODE_HASH)
}

main().catch((error) => {
    console.error('Error computing INIT_CODE_HASH:', error)
    process.exit(1)
})
