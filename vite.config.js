// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { styledEngine } from '@mui/styled-engine';
// import {styled} from '@emotion/styled';

// export default {
//   plugins: [
//     styledEngine(),
//     react(),
//     styled()
//   ],
// };

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
  
    react(),
  ],
});

