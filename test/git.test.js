const WorkingDirectory = require("../models/working-directory");
const GitCommand = require("../models/git-command");

const chai = require('chai');
const expect = chai.expect;


describe("Testing GitCommand.status()", function(){

    it('Should return information if has changes in directory', function(){
        let wd = new WorkingDirectory();
        wd.addFile("index.html", "views", "<html>Hello</html>");
        wd.addFile("index.js", "assets/scripts", "alert('Hi!')");
        
        let git = new GitCommand(wd);
        let output = git.status();

        expect(output).to.equal('You have 2 change/s.\nviews/index.html\nassets/scripts/index.js');
    });

    it('Should return information if no changes in directory', function(){
        let wd = new WorkingDirectory();
        let git = new GitCommand(wd);
        let output = git.status();
        // added comment too
        expect(output).to.equal('You have 0 change/s.\n');
    });

    it("Normal addition test", function(){
        let x = 5 + 5;
        expect(x).to.equal(10);
    });

    it("Normal Subtraction test", function(){
        let x = 10 - 2;
        expect(x).to.equal(8);
    });
})
