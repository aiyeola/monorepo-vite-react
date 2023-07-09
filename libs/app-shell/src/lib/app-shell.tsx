import styles from './app-shell.module.css';

/* eslint-disable-next-line */
export interface AppShellProps {}

export function AppShell() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppShell! one</h1>
    </div>
  );
}

export default AppShell;
