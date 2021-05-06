const siteConfig = require('./siteconfig.json');
const monitor = require('./monitor');

var monitoredSites = [];

function isNewError(site) {

    if (site.data === undefined) {
        return true;
    }

    var delta = new Date().getTime() - site.data.getTime();
    if (delta >= valueOf(600000)) {

        // maio do que 24 horas em milesegundos
        return true;
    }
    console.log(delta)
    return delta;


}


function isOk(status) {

    if (status < 200 || status >= 299) {
        return false;
    } else {
        return true;

    }

}
var timer = async (sites) => {

    for (let i = 0; i < sites.length; i++) {
        var exitstSite = monitoredSites.find((x) => {
            return x.code == sites[i].code;
        });

        if (exitstSite === undefined) {
            this.monitoredSites.push(sites[i]);
        }
    }

    for (let i = 0; i < monitoredSites.length; i++) {
        try {
            var site = monitoredSites[i];
            console.log(`Monitorando site ${site.name}, url: ${site.url}`);

            if (site.churn) {
                console.log("Contrato cancelado", site.name);
                continue;
            }

            if (!(site.site === undefined || site.site)) {
                console.log("Contrato não possui site", site.name);
                continue;
            }

            site.status = await monitor.requestUrl(site);

            if (!isOk(site.status) && isNewError(site)) {
                site.date = new Date();
                var formatDate = `${site.date.getDate()}/${site.date.getMonth() + 1}/${site.date.getFullYear()}`;
                site.formatDate = formatDate;
                monitor.notify(site);
            }



        } catch (error) {
            console.log(error);
        }
    }
}

exports.run = async () => {
    await timer(siteConfig);
}

exports.registerTimer = () => {
    setInterval(timer, 60000, siteConfig);
}

exports.monitoredSites = monitoredSites;

//function getDeltaDate(site) {
 //   return new Date().getTime() - site.data.getTime();
//}


