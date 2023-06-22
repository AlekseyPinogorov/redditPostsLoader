import React, { useEffect, useRef } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const rect = ref.current?.getBoundingClientRect();
  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>
        {button}
      </div>
      {isDropdownOpen && (
        ReactDOM.createPortal((
          <div className={styles.listContainer} >
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
              style={{
                top: rect ? rect.y + window.scrollY + rect.height * 1.5 : 0,
                left: rect ? rect.x + window.scrollX - 110 : 0,
              }}
            >
              {children}
            </div>
          </div>
        ), node)
      )}
    </div>
  );
}
