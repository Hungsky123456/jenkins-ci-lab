const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>CI/CD GitOps Lab - End-to-End Test</h1>
    <p>Jenkins + Docker + Kubernetes + Argo CD</p>
    <p>Automated CI/CD deployment successful!</p>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Application running on port ${PORT}`);
});
