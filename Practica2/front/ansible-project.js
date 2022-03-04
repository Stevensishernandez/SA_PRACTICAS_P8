var Ansible = require('node-ansible');
var command = new Ansible.AdHoc().module('shell').hosts('local').args("ansible-playbook playbook.yml --connection=local");

var promise = command.exec();
promise.then(function(successResult) {
  console.log(successResult.code); // Exit code of the executed command
  console.log(successResult.output) // Standard output/error of the executed command
}, function(error) {
  console.error(error);
})
