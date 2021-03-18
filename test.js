var axious = require('axios')
var ff = () => {
    sqlRun
        .then(r => {
            if (r == null) {
                return '';
            }
        })
        .then(ee => {
            return axious.get('tet')
        })
        .then(e=>{
            
        })

}