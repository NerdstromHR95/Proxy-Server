const express = require('express');
// const request = require('request');
const proxy = require('http-proxy-middleware');

const app = express();

app.use('/:itemNo', express.static(__dirname + '/../client/dist'));

app.use('/details/*', proxy({target: 'http://localhost:3004'}));

app.use('/:itemNo/reviews/*', proxy({target: 'http://localhost:3002'}));

app.use('/photo/*', proxy({target: 'http://localhost:3001'}));

app.use('/:productNumber/random', proxy({target: 'http://localhost:3003'}));




// app.get('/details', function(req, res) {
// 	request('http://localhost:3004', function(err, data) {
// 		if (err) {
// 			console.log('Proxy Error', err)
// 		}
// 		console.log('Here\'s that data', data.body)
// 		res.send(data.body);
// 	})
// })

// app.get('/1/reviews', function(req, res) {
// 	request('http://localhost:3002', function(err, data) {
// 		if (err) {
// 			console.log('Jehwa error', err)
// 		}
// 		res.send(data.body);
// 	})
// })

app.listen(3000, function() {
	console.log('Listening on port 3000');
})


// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.listen(port, () => {
//   console.log(`server running at: http://localhost:${port}`);
// });