let data = JSON.parse(`[
                {
                    "type": "Repository",
                    "databaseId": 1,
                    "name": "GreenVenator/1",
                    "path": "/GreenVenator/1"
                },
                {
                    "type": "Repository",
                    "databaseId": 2714884,
                    "name": "ricardocabral/iskdaemon",
                    "path": "/ricardocabral/iskdaemon"
                },
                {
                    "type": "Repository",
                    "databaseId": 47174652,
                    "name": "wollmers/Image-Seek",
                    "path": "/wollmers/Image-Seek"
                }
            ]`);
            
let csvBody = [];
let keys = [];

data.forEach(n => {
    let values = [];
    Object.keys(n).forEach(k => {
        if (keys.indexOf(`"${k}"`) === -1) {
            keys.push(`"${k}"`);
        }
    })
    Object.values(n).forEach(v => values.push(`"${v}"`));
    csvBody.push(values.join(","));
});

let csv = [keys.join(","),...csvBody].join("\n");