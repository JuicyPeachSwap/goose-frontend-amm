import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.peachswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.peachswap.finance/'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.peachswap.finance/#/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.peachswap.finance/farms'
  },
  {
    label: 'Baskets',
    icon: 'PoolIcon',
    href: 'https://www.peachswap.finance/baskets'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9469B619f991a63b59C333f5ffc86FD3011Ce044', // testnet address - to be changed
      },
      //  {
      //  label: 'CoinGecko',
      //  href: 'https://www.coingecko.com/en/coins/goose-finance',
      //  },
      //  {
      //  label: 'CoinMarketCap',
      //  href: 'https://coinmarketcap.com/currencies/goose-finance/',
      //  },
      //  {
      //  label: 'AstroTools',
      //  href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      //  },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/JuicyPeachSwap/",
      },
      {
        label: "Docs",
        href: "https://juicypeachswap.gitbook.io/JuicyPeachSwap/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@peachswap_83741",
      },
    ],
  },

]

export default config
