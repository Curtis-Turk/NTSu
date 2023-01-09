const express = require('express');
var cors = require('cors');
const app = express();

app.get('/', (req, res) => {
	res.json({ message: 'welcome' });
});

app.get('/api', cors(), (req, res) => {
	res.json({ message: 'hello' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Express app listening on ${PORT}`);
});
