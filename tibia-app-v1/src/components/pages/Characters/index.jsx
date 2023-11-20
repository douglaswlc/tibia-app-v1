import { Button, Card, Col, Input, Row, Space } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';

const { Search } = Input;

function Characters() {
  const [name, setName] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/v3/character/${name}`);
      const characterInfo = response.data.characters.character;
      setCharacterData(characterInfo);
    } catch (err) {
      console.error('Error when fetching character data', err);
    }

    setLoading(false);
  };

  return (
    <div style={{ height: '100vh', padding: '5vh' }}>
      <Space direction='horizontal'>
        <Link to='/'>
          <Button>Back to home</Button>
        </Link>
        <Search
          value={name}
          onChange={e => setName(e.target.value)}
          onSearch={handleSubmit}
          placeholder='Search character'
          style={{ width: 400 }}
        />
      </Space>
      {loading && <h3>Loading...</h3>}
      {characterData && (
        <Row gutter={18} style={{ padding: '30px' }}>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Name' bordered={false}>
              {characterData.name}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Sex' bordered={false}>
              {characterData.sex}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Level' bordered={false}>
              {characterData.level}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Name:' bordered={false}>
              {characterData.name}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Sex:' bordered={false}>
              {characterData.sex}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Vocation' bordered={false}>
              {characterData.vocation}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='World' bordered={false}>
              {characterData.world}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Guild' bordered={false}>
              {characterData.guild.name ? characterData.guild.name : "Don't have guild"}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Account Status' bordered={false}>
              {characterData.account_status}
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Characters;
