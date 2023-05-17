import DotLoader from 'react-spinners/DotLoader';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <DotLoader
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Spinner>
  );
};
