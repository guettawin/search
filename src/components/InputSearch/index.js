import { Input } from 'antd';
import { SearchOutlined, AudioOutlined } from '@ant-design/icons';

const InputSearch = props => (
  <Input
    size="large"
    placeholder="Search anime"
    prefix={<SearchOutlined />}
    allowClear={true}
    suffix={<AudioOutlined />}
    {...props}
  />
);

export default InputSearch;
