import React from 'react';
import styles from './userblock.css';
import { IconAnon } from '../../../Icons';
import { Break } from '../../../Break';
import { EColor, Text } from '../../../Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href='https://www.reddit.com/api/v1/authorize?client_id=yaLiqZVAcGEIx8KXUr5meA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColor.grey99}>Загрузка...</Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
