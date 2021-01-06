import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const App = () => {
  const [input, setInput] = React.useState('');
  const [results, setResults] = React.useState([]);

  const getResults = () => {
    axios.get('/events', {
      params: {
        q: input
      }
    })
    .then(res => console.log(res))
    .err(err => console.log(err));
  }
  return (
    <Form
      layout='inline'
    >
      <Form.Item
        label='Keyword to Search'
        name='keyword'
        rules={[
          {
            required: true,
            message: 'Please input a keyword to search for!',
          },
        ]}
      >
        <Input onChange={event => setInput(event.target.value)}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={getResults}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App;