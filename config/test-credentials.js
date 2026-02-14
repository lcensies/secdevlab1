// Test configuration file with hardcoded credentials (FOR TESTING ONLY)

module.exports = {
  database: {
    host: 'localhost',
    username: 'admin',
    password: 'SuperSecret123!'
  },
  api: {
    // AWS API Key (fake for testing)
    aws_access_key_id: 'AKIAIOSFODNN7EXAMPLE',
    aws_secret_access_key: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    // Slack webhook (fake for testing)
    slack_webhook: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX'
  }
};
