import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  TextField,
} from '@material-ui/core';
// import icon from '../../assets/icon.svg';
import './App.css';

const AddWord = () => {
  const [wordsList, setWordsList] = React.useState([]);
  const [word, setWord] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <>
      <FormControl>
        <TextField
          label="Дума"
          variant="outlined"
          color="secondary"
          style={{ margin: '5px' }}
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
        <TextField
          label="Значение"
          variant="outlined"
          color="secondary"
          style={{ margin: '5px' }}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '5px' }}
          onClick={() => {
            const updatedList = [...wordsList];
            updatedList.push({ word, description });
            setWordsList(updatedList);
          }}
        >
          Добави дума
        </Button>
      </FormControl>
      {wordsList && wordsList.length > 0 ? (
        <div
          style={{ margin: '5px', border: '1px solid black', padding: '5px' }}
        >
          {wordsList.map((word) => (
            <div style={{ margin: '5px', padding: '5px' }}>
              {word.word} - {word.description}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddWord />} />
      </Routes>
    </Router>
  );
}
