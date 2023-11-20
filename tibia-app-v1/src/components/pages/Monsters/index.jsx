import { Button, Card, Col, Input, Row, Space } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';

const { Search } = Input;

function Monsters() {
  const [race, setRace] = useState('');
  const [monsterData, setMonsterData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/v3/creature/${race}`);
      const monsterInfo = response.data.creature;
      setMonsterData(monsterInfo);
    } catch (err) {
      console.error('Error when fetching monster data', err);
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
          placeholder='Search monster'
          value={race}
          onChange={e => setRace(e.target.value)}
          onSearch={handleSubmit}
          style={{ width: 400 }}
        />
      </Space>
      {loading && <h3>Loading...</h3>}
      {monsterData && (
        <Row gutter={18} style={{ padding: '30px' }}>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Image' bordered={false}>
              <img style={{ padding: '20px' }} src={monsterData.image_url} className='monster' alt='Monster' />
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Name' bordered={false} style={{ height: '213px' }}>
              {monsterData.name}
            </Card>
          </Col>

          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Hitpoints:' bordered={false} style={{ height: '213px' }}>
              {monsterData.hitpoints}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Immune' bordered={false}>
              {monsterData.immune ? monsterData.immune : "Don't have immune"}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Strong' bordered={false}>
              {monsterData.strong.map(i => (
                <p key={i}>{i}</p>
              ))}
            </Card>
          </Col>
          <Col span={8} style={{ padding: '20px' }}>
            <Card title='Weakness' bordered={false}>
              {monsterData.weakness ? monsterData.weakness : "Don't have weakness"}
            </Card>
          </Col>
          <Col span={30} style={{ padding: '20px' }}>
            <Card title='Behaviour:' bordered={false} style={{ height: '213px' }}>
              {monsterData.behaviour}
            </Card>
          </Col>
          <Col span={30} style={{ padding: '20px' }}>
            <Card type='inner' title='Description' bordered={false}>
              {monsterData.description}
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Monsters;
