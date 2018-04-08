var Exchange = require('./exchange');
var Queue = require('./queue');
var request = require('./request');
var response = require('./response');

var getResponse = require('./get/response');
var getRequest = require('./get/request');

var bulkDequeue = require('./bulk-dequeue');
var rpc = require('./rpc');

module.exports = {
	Exchange: Exchange,
	Queue: Queue,
	request: request,
	response: response,
	get: {
		request: getRequest,
		response: getResponse,
	},
	bulkDequeue: bulkDequeue,
	rpc: rpc,
};
