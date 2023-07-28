import { Radio } from 'react-loader-spinner';

export const Loader = () => (
  <Radio
    height="100"
    width="100"
    color="#808080"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: 'calc(50% - 50px)',
    }}
    visible={true}
    ariaLabel="three-circles-rotating"
  />
);
