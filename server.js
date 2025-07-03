const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const treatmentRoutes = require('./routes/treatments');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/treatments', treatmentRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
