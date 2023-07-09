import { AppShell } from '@remote/app-shell';
import styles from './tool-lib.module.css';

/* eslint-disable-next-line */
export interface ToolLibProps {}

export function ToolLib(props: ToolLibProps) {
  return (
    <div className={styles['container']}>
      <AppShell />
      <h1>Welcome to ToolLibs josh!</h1>
    </div>
  );
}

export default ToolLib;
