import React from 'react';
import styles from './commmentcontrol.css';
import { EIcons, Icon } from '../../Icon';
import { EColor, Text } from '../../Text';

interface ICommmentControlProps {
  onBtnClick?: () => void;
}

export function CommmentControl(props: ICommmentControlProps) {
  return (
    <ul className={styles.controlWrapper}>
      <li className={styles.elem}>
        <button onClick={props.onBtnClick}>
          <Icon name={EIcons.comments} size={15}></Icon>
          <Text size={14} color={EColor.grey99}>Ответить</Text>
        </button>
      </li>

      <li className={styles.elem}>
        <button>
          <Icon name={EIcons.share} size={15}></Icon>
          <Text size={14} color={EColor.grey99}>Поделиться</Text>
        </button>
      </li>

      <li className={styles.elem}>
        <button>
          <Icon name={EIcons.warning} size={15}></Icon>
          <Text size={14} color={EColor.grey99}>Пожаловаться</Text>
        </button>
      </li>
    </ul>
  );
}
