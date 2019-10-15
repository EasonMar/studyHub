#!/usr/bin/env node
require('shelljs/global');
var argv = require('yargs')
    .command("morning", "good morning", function (yargs) {
        echo("Good Morning");
        var argv = yargs.reset()
            .option("m", {
                alias: "message",
                description: "provide any sentence"
            })
            .help("h")
            .alias("h", "help")
            .argv;

        echo(argv.m);
    })
    .command("evening", "good evening", function (yargs) {
        echo("Good Evening");
    })
    .argv;