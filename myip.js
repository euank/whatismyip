function addr(req, res) {
    var badIpv6Start = '::ffff:';
    var ip = req.headers['x-real-ip'] || req.remoteAddress;
    if(ip.startsWith(badIpv6Start)) {
        ip = ip.substring(badIpv6Start.length);
    }
    return ip;
}
