import React from 'react';
import styles from './menuitemslist.css';
import { EColor, Text } from '../../../../Text';
import { EIcons, Icon } from '../../../../Icon';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../../GenericList';

// const LIST = [
//   { As: 'li' as const, className: `${styles.menuItem} ${styles.mobileItem}`, text: <Text size={12} color={EColor.grey99}>Комментарии</Text>, icon: <Icon name={EIcons.comments} size={15}></Icon> },
//   { As: "li" as const, className: `${styles.divider} ${styles.mobileItem}`, text: '' },
//   { As: 'li' as const, className: `${styles.menuItem} ${styles.mobileItem}`, text: <Text size={12} color={EColor.grey99}>Поделиться</Text>, icon: <Icon name={EIcons.share}></Icon> },
//   { As: "li" as const, className: `${styles.divider} ${styles.mobileItem}`, text: '' },
//   { As: 'li' as const, className: `${styles.menuItem}`, text: <Text size={12} color={EColor.grey99}>Скрыть</Text>, icon: <Icon name={EIcons.block}></Icon> },
//   { As: "li" as const, className: `${styles.divider}`, text: '' },
//   { As: 'li' as const, className: `${styles.menuItem} ${styles.mobileItem}`, text: <Text size={12} color={EColor.grey99}>Сохранить</Text>, icon: <Icon name={EIcons.save} size={14}></Icon> },
//   { As: "li" as const, className: `${styles.divider} ${styles.mobileItem}`, text: '' },
//   { As: 'li' as const, className: `${styles.menuItem}`, text: <Text size={12} color={EColor.grey99}>Пожаловаться</Text>, icon: <Icon name={EIcons.warning} size={14}></Icon> },
// ].map(generateId);

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={`${styles.menuItem} ${styles.mobileItem}`}>
        <Icon name={EIcons.comments} size={15}></Icon>
        <Text size={12} color={EColor.grey99}>Комментарии</Text>
      </li>

      <div className={`${styles.divider} ${styles.mobileItem}`} />

      <li className={`${styles.menuItem} ${styles.mobileItem}`}>
        <Icon name={EIcons.share}></Icon>
        <Text size={12} color={EColor.grey99}>Поделиться</Text>
      </li>

      <div className={`${styles.divider} ${styles.mobileItem}`} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.block}></Icon>
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider} />

      <li className={`${styles.menuItem} ${styles.mobileItem}`}>
        <Icon name={EIcons.save} size={14}></Icon>
        <Text size={12} color={EColor.grey99}>Сохранить</Text>
      </li>

      <div className={`${styles.divider} ${styles.mobileItem}`} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={14}></Icon>
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
    </ul>
    // <ul className={styles.menuItemsList}>
    //   <GenericList list={LIST} />
    // </ul>
  );
}



