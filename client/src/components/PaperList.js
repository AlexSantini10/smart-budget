import * as React from 'react';
import MyPaper from './MyPaper';

export default function PaperList() {
  return (
    <div style={{ 
      display: 'flex', 
      position: 'sticky',
      flexDirection: 'column', 
      margin: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      width: '95%',
      overflowY: 'scroll',
      marginTop: '10vh'
    }}>
      <MyPaper label2="Cacca"/>
      <MyPaper />
      <MyPaper label2="Cacca"/>
      <MyPaper />
      <MyPaper />
      <MyPaper />
      <MyPaper label2="Cacca"/>
      <MyPaper />
      <MyPaper label2="Cacca"/>
      <MyPaper />
      <MyPaper />
      <MyPaper />
    </div>
  );
}