let Mood = artifacts.require("./Mood.sol");
let moodInstance;

contract('Mood Contract', function (accounts) {
    //accounts[0] is the default account
    //Test case 1
    it("Contract deployment", function () {
      return Mood.deployed().then(function (instance) {
        moodInstance = instance;
        assert(moodInstance !== undefined, 'Ballot contract should be defined');
      });
    });
})