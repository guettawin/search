import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

const Footer = () => (
  <Layout.Footer style={{ textAlign: 'right' }}>
    <span><CopyrightOutlined /> Alexandr Semenenko</span>
  </Layout.Footer>
);

export default Footer;
