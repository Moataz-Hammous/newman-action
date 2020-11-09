const core = require('@actions/core');
const newman = require('newman');
const start = () => {
	try {
		const newmanStringifierOptions = core.getInput('options');
		// console.log(`Newman Options:${newmanStringifierOptions}`);
		//Start executing postman collection
		executeNewman(JSON.parse(JSON.stringify(newmanStringifierOptions)));
	} catch (error) {
		core.setFailed(error.message);
	}
}
const executeNewman = (newmanOptions) => {
	console.log("Starting Running newman")
	newman.run(newmanOptions, function (err, summary) {
		if (err) {
			throw err;
		}
		console.log('collection run complete!');
		core.setOutput('summary', JSON.stringify(summary))
	})
}

start();
