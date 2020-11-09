const core = require('@actions/core');
const github = require('@actions/github');
const newman = require('newman');
const start = () => {
	try {
		const newmanOptions = core.getInput('options');
		console.log(`Newman Options:${newmanOptions}`);
		// Get the JSON webhook payload for the event that triggered the workflow
		const payload = JSON.stringify(github.context.payload, undefined, 2)
		console.log(`The event payload: ${payload}`);
		//Start executing postman collection
		executeNewman(newmanOptions);
	} catch (error) {
		core.setFailed(error.message);
	}
}
const executeNewman = (newmanOptions) => {
	newman.run(newmanOptions).on('done', (err, summary) => {
		if (err || summary.run.failures.length > 0) {
			core.setFailed(`Newman run failed! ${err}`);
		} else {
			core.debug('Collection run completed.')
		}
	})
}

start();
