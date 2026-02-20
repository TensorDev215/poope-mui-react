import { PropsWithChildren, useMemo } from "react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { clusterApiUrl } from "@solana/web3.js"
import { CoinbaseWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, WalletConnectWalletAdapter } from "@solana/wallet-adapter-wallets"
import {
    ConnectionProvider, WalletProvider
} from '@solana/wallet-adapter-react'

export const Web3Provider = ({ children }: PropsWithChildren) => {
    const network = WalletAdapterNetwork.Mainnet

    const endpoint = useMemo(() => clusterApiUrl(network), [network])

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new CoinbaseWalletAdapter(),
            new WalletConnectWalletAdapter({
                network,
                options: { projectId:  "c84e06688d3d5d4dd2fdfee081e66653"},
            }),
        ],
        [network]
    );
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    )
}