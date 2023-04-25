import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';



export default function Main() {
  return (
    <nav>
      <h3> hi from main</h3>
      <Navbar />
      <Body />
    </nav>
  )
}
