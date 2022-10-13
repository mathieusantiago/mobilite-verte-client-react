

const _strNoAccent = (a) => {
    let b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ/?",
    c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
    d="";
    for(let i = 0, j = a.length; i < j; i++) {
    let e = a.substr(i, 1);
    d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
    }
return d;
};

export default _strNoAccent;
