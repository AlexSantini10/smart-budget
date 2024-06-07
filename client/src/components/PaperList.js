import * as React from 'react';
import MyPaper from './MyPaper';

export default function PaperList() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxHeight: '40%',
      overflowY: 'auto',
    }}>
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper />
    </div>
  );
}