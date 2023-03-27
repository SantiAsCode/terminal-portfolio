'use client';

import React, { useState } from 'react';

export default function Command({ children }: any) {

  return (
    <p className='break-words'>{ children }</p>
  )
}
