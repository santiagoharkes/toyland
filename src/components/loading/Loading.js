// Styles
import { SpinnerRoller } from "./LoadingStyles";

function Loading(props) {
  return (
    <SpinnerRoller {...props} title="spinner-loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerRoller>
  );
}

export default Loading;
