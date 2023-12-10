import { ContextApi } from 'contexts/Localization/types';
import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'KacoSwap',
  description:
    'The most popular AMM on BSC by user count! Earn KAC through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by KacoSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://kaco.finance/images/hero.png',
};

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('KacoSwap')}`,
      };
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('KacoSwap')}`,
      };
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('KacoSwap')}`,
      };
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('KacoSwap')}`,
      };
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('KacoSwap')}`,
      };
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('KacoSwap')}`,
      };
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('KacoSwap')}`,
      };
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('KacoSwap')}`,
      };
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('KacoSwap')}`,
      };
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('KacoSwap')}`,
      };
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('KacoSwap')}`,
      };
    default:
      return null;
  }
};
