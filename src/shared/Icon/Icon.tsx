import React from 'react';
import styles from './icon.css';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, WarningIcon } from '../Icons';

export type TSizes = 10 | 12 | 14 | 15 | 16 | 20 | 24 | 30;

export enum EIcons {
  block = 'BlockIcon',
  warning = 'WarningIcon',
  comments = 'CommentsIcon',
  save = 'SaveIcon',
  share = 'ShareIcon',
}

const icons = {
  [EIcons.block]: <BlockIcon />,
  [EIcons.warning]: <WarningIcon />,
  [EIcons.comments]: <CommentsIcon />,
  [EIcons.save]: <SaveIcon />,
  [EIcons.share]: <ShareIcon />,
}

interface IIconProps {
  name: EIcons,
  size?: TSizes,
}

export function Icon({ name, size = 12 }: IIconProps) {
  return (
    getIconComponent(name, size)
  );
}

function getIconComponent(name: EIcons, size: TSizes) {
  switch (name) {
    case EIcons.block: return <BlockIcon size={size} />
    case EIcons.warning: return <WarningIcon size={size} />
    case EIcons.comments: return <CommentsIcon size={size} />
    case EIcons.save: return <SaveIcon size={size} />
    case EIcons.share: return <ShareIcon size={size} />
  }
}