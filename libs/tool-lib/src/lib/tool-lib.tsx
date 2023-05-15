import styles from './tool-lib.module.css';

/* eslint-disable-next-line */
export interface ToolLibProps {}

export function ToolLib(props: ToolLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ToolLibs!</h1>
    </div>
  );
}

export default ToolLib;
