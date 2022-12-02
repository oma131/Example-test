import './App.css';
import YourApp from '../src/components/YourApp'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import {chain, configureChains, createClient, WagmiConfig,} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const alchemyAPI = process.env.REACT_APP_ALCHEMY_URL_TESTNET;

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: alchemyAPI }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Token Swap ',
  chains
});



const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <YourApp />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
