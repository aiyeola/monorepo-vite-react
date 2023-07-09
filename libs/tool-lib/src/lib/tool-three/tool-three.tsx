import styles from './tool-three.module.css';

/* eslint-disable-next-line */
export interface ToolThreeProps {}

export function ToolThree(props: ToolThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ToolThree!</h1>
    </div>
  );
}

export default ToolThree;
