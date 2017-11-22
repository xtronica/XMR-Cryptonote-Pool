var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v1.0-XT-M";
global.devDonationAddress = '43y9XfsnZka28wuKsygTkp3Jm8CFWc4HuV9RDahGf7AeXdci9t6oaxNToiubfCq11tQAD2YZyb478foKSCAPdMZRAP7EJS1';
global.coreDevDonationAddress = '43y9XfsnZka28wuKsygTkp3Jm8CFWc4HuV9RDahGf7AeXdci9t6oaxNToiubfCq11tQAD2YZyb478foKSCAPdMZRAP7EJS1';
global.doDonations =  devDonationAddress[0] === config.poolServer.poolAddress[0] && (
    config.blockUnlocker.devDonation > 0 || config.blockUnlocker.coreDevDonation > 0
);
